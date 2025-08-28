<script lang="ts">
    import { page } from '$app/state';
    import type { ImgKey } from '$lib/DailyCard/constant';
    import { ImgDef } from '$lib/DailyCard/constant';

    import DailyCard from '$lib/DailyCard/DailyCard.svelte';

    let img = $derived.by(()=>{
        const imgParam = page.url.searchParams.get('img')||'';
        return (imgParam in ImgDef) ? imgParam as ImgKey : 'default';
    });
    let name = $derived(page.url.searchParams.get('name') || '');
</script>

<div class="wrap">
    <DailyCard img={img} name={name} />
</div>

<style>
    .wrap {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
