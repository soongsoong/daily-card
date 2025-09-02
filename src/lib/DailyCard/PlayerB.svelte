<script lang="ts">
    import PlayIcon from '$lib/assets/play_arrow_2.svg';
</script>

<div class="card player">
    <div class="img-container">
        <img src={PlayIcon} alt="play icon" style="z-index:10"/>
        <img src="https://image.bugsm.co.kr/album/images/500/204740/20474053.jpg" alt="album cover"/>
    </div>
    <div class="desc">
        <h2>거울</h2>
        <p>한로로</p>
    </div>
</div>

<style>
    .player {
        overflow: hidden;
        display: flex;
        align-items: center;
        padding: 10px;
        gap: 15px;
    }

    .player > * {
        height: 100%;
    }

    .img-container {
        aspect-ratio: 1/1;
        overflow: hidden;
        border-radius: 12px;
        position: relative;
    }

    img {
        position: absolute;
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    .desc {
        box-sizing: border-box;
        padding: 10px 0;
    }

    h2 {
        font-size: 18px;
        margin-bottom: 7px;
        font-family: 'Galmuri14', sans-serif;
    }

    .desc > p {
        font-size: 11px;
        margin-left: 1px;
        color: #434343;
    }

    * {
        margin: 0;
    }
</style>
