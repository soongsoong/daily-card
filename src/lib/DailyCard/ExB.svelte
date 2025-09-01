<script lang="ts">
    import { ProfileImage } from './constant';

    let { name = "박병철" } = $props<{
        name?: string;
    }>();
</script>

<div class="card profile2">
    <button>
        <span class="material-symbols-outlined">favorite</span>
    </button>
    <div class="tokens">
        <span class="material-symbols-outlined">radio_button_checked</span>
        <p>{name}</p>
    </div>
    <img src={ProfileImage} />
</div>

<style>
    .card {
        background: white;
        width: 100%;
        height: 100%;
        border-radius: 15px;
        overflow: hidden;
        aspect-ratio: 1/1.4;
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
        left: 12px;
        z-index: 10;
        padding: 5px 10px;
        display: flex;
        background: rgb(255 255 255 / 37%);
        backdrop-filter: blur(10px);
        border-radius: 15px;
        align-items: center;
        gap: 5px;
    }

    .tokens > .material-symbols-outlined {
        font-size: 12px;
    }

    .tokens > p {
        margin: 0;
        font-size: 12px;
        font-weight: 500;
    }

    .profile2 > button {
        top: 10px;
        right: 10px;
        z-index: 10;
        padding: 0;
        background: rgb(255 255 255 / 37%);
        backdrop-filter: blur(10px);
        border-radius: 15px;
        border: none;
        cursor: pointer;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .profile2 > button > .material-symbols-outlined {
        font-size: 16px;
    }
</style>
