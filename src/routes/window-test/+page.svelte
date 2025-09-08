<script lang="ts">
    import {draggable} from '$lib/actions.svelte'
    import { page } from '$app/state';

    const embeded = $derived(page.url.searchParams.get('embeded') || '');
</script>

<div class="wrap">
    <div class="game-window" style:max-width={embeded === 'true' ? '50%' : '700px'}>
        <div class="header" use:draggable></div>
        <div class="body"></div>
    </div>
</div>

<style>
    .wrap {
        width: 100%;
        height: 100vh;
        background: transparent;
    }

    .game-window {
        /* size */
        width: 30%;
        /* position */
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        /* etc */
        border: 1px solid white;
        box-shadow: 0 0 0 1px black;
    }

    .game-window > div {
        width: 100%;
        box-sizing: border-box;
    }

    .game-window > .header {
        /* size */
        height: 30px;
        /* etc */
        background: linear-gradient(90deg,rgba(255, 255, 255, 1) 0%, rgba(253, 253, 253, 1) 47%, rgba(204, 204, 204, 1) 100%);
    }

    .game-window > .body {
        /* size */
        aspect-ratio: 2/1;
        /* etc */
        background: #92979a;
        box-shadow: inset 0 0 0 1px black;
    }
</style>

