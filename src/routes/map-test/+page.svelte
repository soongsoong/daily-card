<script lang="ts">

</script>


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
    <div class="bordered" style:z-index="1000">
        <div></div>
    </div>
    <div class="bordered" style:margin-left="8px">
        <div></div>
    </div>
</div>

<div class="path"></div>

<div class="area">
</div>


<style>
    :global(body) {
        background: black;
    }

    .wrap {
        /* size */
        width: 100%;
        max-width: 750px;
        padding: 30px;
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

    .bordered:before, 
    .bordered:after, 
    .bordered>:first-child:before, 
    .bordered>:first-child:after {
        /* size */
        width: 8px;

        /* position */
        position:absolute;

        /* etc */
        content: ' ';
        background: black;
    }

    .bordered:before, .bordered:after {
        height: 10px;
        top: -6px;
    }

    .bordered:before {
        left: -4px;
        box-shadow: -6px -6px 0 2px #000000, inset 4px 4px #c2bcbc;
    }

    .bordered:after{
        right: -4px;
        box-shadow: 6px -6px 0 2px #000000, inset -4px 4px #c2bcbc;
    }

    .bordered>:first-child:before, .bordered>:first-child:after {
        height: 8px;
        bottom: -4px;
    }

    .bordered>:first-child:before {
        right: -4px;
        box-shadow: 6px 6px 0 2px #000000, inset -4px -4px #c2bcbc;
    }

    .bordered>:first-child:after {
        left: -4px;
        box-shadow: -6px 6px 0 2px #000000, inset 4px -4px #c2bcbc;
    }
    
    .banner > div:first-child {
        height: 100%;
        width: 30%;
    }

    .banner > div:last-child {
        height: 80%;
        width: 70%;
    }

    .wrap > .area {
        width: 100%;
        height: 30px;
        border-radius: 15px 15px 0px 0px;
    }
</style>