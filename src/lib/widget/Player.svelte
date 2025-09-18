<script lang="ts">
    import {page} from "$app/state";
    import PlayIcon from "$lib/assets/play.svg"

    // params
    const title = $derived(page.url.searchParams.get('title') || '');
    const artist = $derived(page.url.searchParams.get('artist') || '');
    const src = $derived(page.url.searchParams.get('src') || '');
    const alt = $derived(page.url.searchParams.get('alt') || '');
    const url = $derived(page.url.searchParams.get('url') || '');
</script>

<div class="widget player">
    <div class="img-container" onclick={()=>{window.open(url)}}>
        <img src={PlayIcon} alt="play icon" style="z-index:10; opacity:0.5"/>
        <img {src} {alt} />
    </div>
    <div class="desc">
        <h2>{title}</h2>
        <p>{artist}</p>
    </div>
</div>

<style>
    .player {
        /* size */
        padding: 10px;

        /* position */
        display: flex;
        align-items: center;
        gap: 15px;
    }

    .img-container {
        /* size */
        aspect-ratio: 1/1;
        overflow: hidden;

        /* position */
        height: 100%;
        position: relative;

        /* etc */
        border-radius: 12px;
        cursor: pointer;
    }

    .img-container > img {
        /* size */
        width: 100%;
        height: 100%;
        object-fit: cover;

        /* position */
        position: absolute;
    }

    .desc > h2 {
        /* size */
        margin-bottom: 5px;

        /* etc */
        font-family: 'Galmuri14', sans-serif;
        font-size: 18px;
    }

    .desc > p {
        /* size */
        margin-left: 2px;

        /* etc */
        font-size: 11px;
        color: #434343;
    }
</style>