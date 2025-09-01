<script lang="ts">
    import { ProfileImage } from './constant';

    let { name = "박병철" } = $props<{
        name?: string;
    }>();
</script>

<div class="card profile">
    <div class="footer">
        <p>{name}</p>
        <p>></p>
    </div>
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

    .footer{
        bottom: 0;
        left: 0;
        right: 0;
        background: rgb(32, 32, 34);
        z-index: 10;
        padding: 20px 25px;
        height: 60px;
        display: flex;
    }

    .footer > p {
        color: white;
        font-weight: 550;
        font-size: 16px;
        margin: 0;
    }

    .footer > p:last-child {
        margin-left: auto;
    }

    .profile > img {
        z-index: 5;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>
