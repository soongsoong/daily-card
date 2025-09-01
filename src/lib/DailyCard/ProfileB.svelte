<script lang="ts">
    import { ProfileImage } from './constant';
    import SunnyIcon from '$lib/assets/sunny_2.svg';

    let { name = "박병철" } = $props<{
        name?: string;
    }>();
</script>

<div class="card profile2">
    <button>
        09/01
    </button>
    <img id="weather" src={SunnyIcon} alt="sunny icon" />
    <div class="tokens">
        <div id="circle"></div>
        <p>보통</p>
    </div>
    <img src={ProfileImage} />
</div>

<style>
    .card {
        overflow: hidden;
        aspect-ratio: 1/1.3;
    }

    .profile2 {
        position: relative;
    }

    .profile2 > * {
        position: absolute;
        box-sizing: border-box;
    }

    .profile2 > img {
        z-index: 5;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .profile2 > .tokens {
        bottom: 12px;
        right: 12px;
        z-index: 10;
        padding: 5px 10px;
        display: flex;
        background: rgb(255 255 255 / 37%);
        backdrop-filter: blur(10px);
        border-radius: 15px;
        align-items: center;
        gap: 6px;
    }

    #circle {
        width: 5px;
        height: 5px;
        background: greenyellow;
    }

    .tokens > p {
        margin: 0;
        font-size: 12px;
        font-weight: 500;
    }

    .profile2 > button {
        top: 10px;
        left: 10px;
        z-index: 10;
        padding: 5px 10px;
        background: rgb(255 255 255 / 37%);
        backdrop-filter: blur(10px);
        border-radius: 15px;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #weather {
        top: 12px;
        z-index: 10;
        width: 20px;
        height: 20px;
        left: 68px;
    }
</style>
