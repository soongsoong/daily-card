<script lang="ts">
    import { page } from '$app/state';
    import AwkwardEmoji from '$lib/assets/AwkwardEmoji.png';
    import SmilingEmoji from '$lib/assets/SmilingEmoji.png';

    const ImgDef = {
        'default': { src: AwkwardEmoji, alt:"" },
        'awkward': { src: AwkwardEmoji, alt:"awkward emoji" },
        'smile': { src: SmilingEmoji, alt:"smiling emoji" }
    };


    $: img = page.url.searchParams.get('img') || ''
    $: name = page.url.searchParams.get('name') || ''
    
    $: imgKey = (img in ImgDef) ? img as keyof typeof ImgDef : 'default'
</script>

<div class="wrap">
    <div class="card">
        {#if imgKey}
            <img src={ImgDef[imgKey].src} alt={ImgDef[imgKey].alt} />
        {/if}
        <div>
            <p>Welcome, {name}.</p>
            <p>testing....</p>
        </div>
    </div>
</div>

<style>
    .wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100%;
    }

    .card {
        max-width: 400px;
        aspect-ratio: 1.58/1;
        display: grid;
        grid-template-columns: 4fr 6fr;
        column-gap: 10px;
        align-items: center;
    }

    .card > img {
        width: 100%;
        object-fit: contain;
    }

    .card > div {
        width: 100%;
        height: 100%;
    }
</style>
