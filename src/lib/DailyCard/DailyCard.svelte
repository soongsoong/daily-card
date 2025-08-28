<script lang="ts">
    import { ImgDef } from './constant';
    import type { ImgKey } from '$lib/DailyCard/constant';

    let {img, name} = $props<{
        img: ImgKey;
        name: string;
    }>();
</script>

<div class="card">
    <img src={ImgDef[img].src} alt={ImgDef[img].alt} />
    <div>
        <p>Welcome, {name}.</p>
        <p>testing....</p>
    </div>
</div>

<style>
    .card {
        max-width: 400px;
        aspect-ratio: 1.58/1;
        display: grid;
        grid-template-columns: 4fr 6fr;
        column-gap: 10px;
        align-items: center;
    }

    .card > img {
        width: 100%;
        object-fit: contain;
    }

    .card > div {
        width: 100%;
        height: 100%;
    }
</style>