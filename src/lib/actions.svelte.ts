export function draggable(node: HTMLElement) {
    let moving = $state(false);
    let top = $state(0);
    let left = $state(0);
    let height = 0;
    let width = 0;

    $effect(() => {
        const parent = node.parentNode as HTMLElement;
        if (parent) {
            const rect = parent.getBoundingClientRect();
            top = rect.top;
            left = rect.left;
            height = rect.height;
            width = rect.width;

            parent.style.transform = 'translate(0, 0)';
        }
    });

    function handleMouseDown() { moving = true; }

    function handleMouseUp() { moving = false; }

    function handleMouseMove(e: MouseEvent) {
        if (!moving) return;
        
        const newTop = top + e.movementY;
        const newLeft = left + e.movementX;
        
        const maxTop = window.innerHeight - height;
        const maxLeft = window.innerWidth - width;
        
        top = Math.max(0, Math.min(newTop, maxTop));
        left = Math.max(0, Math.min(newLeft, maxLeft));
    }

    $effect(() => {
        const parent = node.parentNode as HTMLElement;
        if (parent) {
            parent.style.top = `${top}px`;
            parent.style.left = `${left}px`;
        }
    });

    $effect(() => {
        node.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            node.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    });
}