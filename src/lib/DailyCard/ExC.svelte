<script lang="ts">
    import { ProfileImage } from './constant';

    let { name = "박병철" } = $props<{
        name?: string;
    }>();
</script>

<div class="card profile">
    <button>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="rgba(255, 255, 255, 0.4)"/>
        </svg>
    </button>
    <p>{name}</p>
    <div class="gradient-overlay"></div>
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

    .profile {
        position: relative;
    }

    .profile > * {
        position: absolute;
        box-sizing: border-box;
    }

    .profile > p {
        z-index: 10;
        color: white;
        font-size: 18px;
        bottom: 20px;
        left: 19px;
        margin: 0;
    }

    .profile > img {
        z-index: 5;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .gradient-overlay {
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, transparent 20%, transparent 80%, rgba(0, 0, 0, 0.7) 100%);
        z-index: 8;
    }

    .profile > button {
        top: 12px;
        right: 12px;
        z-index: 10;
        padding: 0;
        border: none;
        cursor: pointer;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
    }

    .profile > button > svg {
        width: 25px;
        height: 25px;
    }
</style>
