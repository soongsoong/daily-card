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

<div class="card player">
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
        display: flex;
        align-items: center;
        padding: 10px;
        gap: 15px;
    }

    .img-container {
        aspect-ratio: 1/1;
        overflow: hidden;
        border-radius: 12px;
        position: relative;
        height: 100%;
        cursor: pointer;
    }

    .img-container > img {
        position: absolute;
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    h2 {
        font-size: 18px;
        margin-bottom: 5px;
        font-family: 'Galmuri14', sans-serif;
    }

    .desc > p {
        font-size: 11px;
        margin-left: 2px;
        color: #434343;
    }

    .player > img {
        height: 80%;
    }
</style>