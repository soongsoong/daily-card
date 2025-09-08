<script lang="ts">
    import {page} from "$app/state";

    // params
    const msg = $derived(page.url.searchParams.get('msg') || '');
    const src = $derived(page.url.searchParams.get('src') || '');
    const alt = $derived(page.url.searchParams.get('alt') || '');
</script>

<div class="banner">
    <div class="custom-border" style:z-index="1000">
        <div id="profile-image">
            <img {src} {alt} />
        </div>
    </div>
    <div class="custom-border" style:margin-left="8px">
        <div id="banner-msg">
            {msg}
        </div>
    </div>
</div>

<style>
    .banner {
        /* size */
        width: 100%;
        aspect-ratio: 5/1;
        margin-top: 10px;

        /* position */
        display: flex;
        align-items: flex-end;
    }

    .custom-border {
        /* position */
        position: relative;
        z-index: 100;

        /* etc */
        background: var(--banner-bg-color);
        border: 4px solid var(--banner-border-color);
        outline: 4px solid var(--banner-bg-color);
        border-top: 6px solid var(--banner-border-color);
    }

    .custom-border:before,
    .custom-border:after,
    .custom-border>:first-child:before,
    .custom-border>:first-child:after {
        /* size */
        width: 8px;

        /* position */
        position:absolute;

        /* etc */
        content: ' ';
        background: var(--banner-border-color);
    }

    .custom-border:before, .custom-border:after {
        height: 10px;
        top: -6px;
    }

    .custom-border:before {
        left: -4px;
        box-shadow: -6px -6px 0 2px var(--main-bg-color), inset 4px 4px var(--banner-bg-color);
    }

    .custom-border:after{
        right: -4px;
        box-shadow: 6px -6px 0 2px var(--main-bg-color), inset -4px 4px var(--banner-bg-color);
    }

    .custom-border>:first-child:before, .custom-border>:first-child:after {
        height: 8px;
        bottom: -4px;
    }

    .custom-border>:first-child:before {
        right: -4px;
        box-shadow: 6px 6px 0 2px var(--main-bg-color), inset -4px -4px var(--banner-bg-color);
    }

    .custom-border>:first-child:after {
        left: -4px;
        box-shadow: -6px 6px 0 2px var(--main-bg-color), inset 4px -4px var(--banner-bg-color);
    }

    .banner > div:first-child {
        height: 100%;
        width: 30%;
    }

    #profile-image {
        /* size */
        width: calc(100% - 20px);
        height: calc(100% - 20px);
        margin: 10px;
        box-sizing: border-box;

        /* etc */
        border: 3px solid black;
    }

    #profile-image > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .banner > div:last-child {
        height: 80%;
        width: 70%;
    }

    #banner-msg {
        /* size */
        width: 100%;
        height: 100%;
        padding: 25px;
        box-sizing: border-box;

        /* etc */
        font-family: 'Galmuri11', sans-serif;
        font-size: 18px;
    }
</style>