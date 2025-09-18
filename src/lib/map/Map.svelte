<script lang="ts">
    import Banner from './Banner.svelte'
</script>

<div class="map">
    <div class="block">
        <div class="area"></div>
        <div class="path"></div>
        <div class="area"></div>
    </div>

    <div class="path"></div>

    <Banner />

    <div class="path"></div>
    
    <div class="area"></div>
</div>

<style>
    .map {
        /* size */
        width: 80%;
        margin: auto;
        box-sizing: border-box;

        /* position */
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .area {
        /* size */
        box-sizing: border-box;

        /* etc */
        background: var(--map-bg-color);
        border-radius: 15px;
    }

    .path {
        background: var(--map-bg-color);
        box-shadow: 0 0 0 1px var(--map-bg-color);
    }

    .block {
        /* size */
        width: 100%;
        aspect-ratio: 2/1;

        /* position */
        display: flex;
        flex-direction: row;
    }

    .block > .area:first-child {
        width: 65%;
    }

    .block > .path {
        width: 5%;
        height: 18%;
        margin-top: 20%;
    }

    .block > .area:last-child  {
        width: 30%;
        height: 70%;
    }

    .map > .path {
        width: 11%;
        aspect-ratio: 4/1;
        margin-right: 75%;
    }

    .map > .area {
        width: 100%;
        height: 100px;
        border-radius: 15px 15px 0 0;
    }
</style>