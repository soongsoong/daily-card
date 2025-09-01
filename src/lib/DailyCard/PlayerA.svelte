<script lang="ts">
    import PlayIcon from '$lib/assets/play_arrow_1.svg';
    import PlayCircleIcon from '$lib/assets/play_circle.svg';

    let { name = "박병철" } = $props<{
        name?: string;
    }>();
</script>

<div class="card profile2">
    <div class="img-containner">
        <img src="https://image.bugsm.co.kr/album/images/500/204740/20474053.jpg" />
    </div>
    <div class="desc-container">
        <div class="desc">
            <h2>거울</h2>
            <p>한로로</p>
        </div>
        <img src={PlayIcon} alt="Play icon"/>
    </div>
</div>

<style>
    .card {
        overflow: hidden;
        aspect-ratio: 1/1.3;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
    }

    .img-containner {
        width: 100%;
        aspect-ratio: 1/1;
        overflow: hidden;
        border-radius: 12px;
    }

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    .desc-container {
        display: flex;
        flex-direction: row;
        width: 100%;
        margin-top: 5px;
        align-items: center;
    }

    .desc {
        box-sizing: border-box;
        margin-top: 3px;
        padding: 7px;
    }

    h2 {
        font-size: 16px;
        margin-bottom: 5px;
        font-family: galmuri14;
    }

    .desc > p {
        font-size: 11px;
        margin-left: 1px;
        color: #434343;
    }

    .desc-container > img {
        margin-left: auto;
        object-fit: contain;
        background: #ededed;
        border-radius: 18px;
        height: 30px;
        width: 30px;
        margin-right: 7px;
        padding: 10px;
    }

    * {
        margin: 0;
    }
</style>
