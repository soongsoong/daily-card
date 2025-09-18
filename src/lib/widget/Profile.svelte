<script lang="ts">
    import {page} from "$app/state";
    import {weathers, states} from './constant';
    import {paramToNumber} from '../utills'

    // params
    const date = $derived(page.url.searchParams.get('date') || '');
    const weather = $derived(paramToNumber(page.url.searchParams.get('weather')));
    const state = $derived(paramToNumber(page.url.searchParams.get('state')));
    const src = $derived(page.url.searchParams.get('src') || '');
    const alt = $derived(page.url.searchParams.get('alt') || '');
</script>

<div class="widget profile">
    <div class="header">
        <div class="token">{date}</div>
        <img src={weathers[weather].src} alt={weathers[weather].alt} />
    </div>
    <div class="token" style:right="10px" style:bottom="10px">
        <span style:background={states[state].color}></span>
        {states[state].label}
    </div>
    <img id="background" {src} {alt} />
</div>

<style>
    .profile {
        position: relative;
    }

    .profile > * {
        box-sizing: border-box;
        position: absolute;
        z-index: 10;
    }

    .header {
        left: 10px;
        top: 10px;
        display: flex;
        align-items: center;
        gap: 6px;
    }

    .header > img {
        height: 22px;
    }

    .token {
        /* size */
        padding: 5px 12px;

        /* position */
        display: flex;
        align-items: center;
        gap: 6px;

        /* etc */
        background: rgb(255 255 255 / 37%);
        backdrop-filter: blur(10px);
        border-radius: 15px;
        font-size: 12px;
    }

    .token > span {
        width: 5px;
        height: 5px;
    }

    #background {
        /* size */
        width: 100%;
        height: 100%;
        object-fit: cover;

        /* position */
        z-index: 5;
    }
</style>


