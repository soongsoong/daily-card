<script lang="ts">
    import { ProfileImage } from './constant';

    let { name = "박병철" } = $props<{
        name?: string;
    }>();
</script>

<div class="card profile">
    <p>{name}</p>
    <button>Follow</button>
    <div class="gradient-overlay"></div>
    <img src={ProfileImage} />
</div>

<style>
    .card {
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
        bottom: 51px;
        left: 20px;
        margin: 0;
    }

    .profile > button {
        z-index: 10;
        background: #f5f5f5;
        border-radius: 7px;
        height: 30px;
        border: none;
        font-size: 14px;
        bottom: 15px;
        left: 50%;
        transform: translateX(-50%);
        width: calc(100% - 32px);
        cursor: pointer;
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
        height: 60px;
        background: linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(0, 0, 0, 0.3) 70%, rgba(0, 0, 0, 0.7) 100%);
        z-index: 8;
    }
</style>
