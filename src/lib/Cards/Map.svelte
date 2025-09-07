<script lang="ts">
    import {page} from "$app/state";

    // params
    const msg = $derived(page.url.searchParams.get('msg') || '');
    const src = $derived(page.url.searchParams.get('src') || '');
    const alt = $derived(page.url.searchParams.get('alt') || '');
</script>

<div class="wrap">
    <div class="top">
        <div class="area">
        </div>
        <div class="path" id="path-right">

        </div>
        <div class="area">
        </div>
    </div>

    <div class="path"></div>

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

    <div class="path"></div>
    
    <div class="area">
    </div>
</div>

<style>
    .wrap {
        /* size */
        width: 80%;
        margin: auto;
        box-sizing: border-box;

        /* position */
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .top {
        /* size */
        width: 100%;
        aspect-ratio: 2/1;

        /* position */
        display: flex;
        flex-direction: row;
    }
    
    .area {
        /* size */
        box-sizing: border-box;

        /* etc */
        background: #e5dfdd;
        border-radius: 15px;
    }

    .path {
        background: #e5dfdd;
        box-shadow: 0 0 0 1px #e5dfdd;
    }

    .top > div:first-child {
        width: 65%;
    }

    #path-right {
        width: 5%;
        height: 18%;
        margin-top: 20%;
    }

    .top > div:last-child {
        width: 30%;
        height: 70%;
    }

    .wrap > .path {
        width: 11%;
        aspect-ratio: 4/1;
        margin-right: 75%;
    }

    .banner {
        /* size */
        width: 120%;
        aspect-ratio: 5/1;
        margin-top: 10px;

        /* position */
        display: flex;
        align-items: flex-end;
    }

    .banner > div {
        /* position */
        position: relative;
        z-index: 100;

        /* etc */
        background: #C2BCBC;
        border: 4px solid black;
        outline: 4px solid #C2BCBC;
        border-top: 6px solid black;
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
        background: black;
    }

    .custom-border:before, .custom-border:after {
        height: 10px;
        top: -6px;
    }

    .custom-border:before {
        left: -4px;
        box-shadow: -6px -6px 0 2px #ffffff, inset 4px 4px #c2bcbc;
    }

    .custom-border:after{
        right: -4px;
        box-shadow: 6px -6px 0 2px #ffffff, inset -4px 4px #c2bcbc;
    }

    .custom-border>:first-child:before, .custom-border>:first-child:after {
        height: 8px;
        bottom: -4px;
    }

    .custom-border>:first-child:before {
        right: -4px;
        box-shadow: 6px 6px 0 2px #ffffff, inset -4px -4px #c2bcbc;
    }

    .custom-border>:first-child:after {
        left: -4px;
        box-shadow: -6px 6px 0 2px #ffffff, inset 4px -4px #c2bcbc;
    }
    
    .banner > div:first-child {
        height: 100%;
        width: 30%;
    }

    #profile-image {
        width: calc(100% - 20px);
        height: calc(100% - 20px);
        margin: 10px;
        box-sizing: border-box;
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
        padding: 25px;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        font-family: 'galmuri11';
        font-size: 18px;
    }

    .wrap > .area {
        width: 100%;
        height: 100px;
        border-radius: 15px 15px 0px 0px;
    }
</style>