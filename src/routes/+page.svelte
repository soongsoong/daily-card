<script lang="ts">
    import { page } from '$app/state';
    import AwkwardEmoji from '$lib/assets/AwkwardEmoji.png';
    import SmilingEmoji from '$lib/assets/SmilingEmoji.png';

    const ImgDef = {
        'default': { src: AwkwardEmoji, alt:"" },
        'awkward': { src: AwkwardEmoji, alt:"awkward emoji" },
        'smile': { src: SmilingEmoji, alt:"smiling emoji" }
    };

    type ImgKey = keyof typeof ImgDef;

    let img = $state<ImgKey>('default');
    let name = $state('');

    $effect(() => {
        const imgParam = page.url.searchParams.get('img')||'';
        img = (imgParam in ImgDef) ? imgParam as ImgKey : 'default';
        name = page.url.searchParams.get('name') || '';
    });

</script>

<div class="wrap">
    <div class="card">
        <img src={ImgDef[img].src} alt={ImgDef[img].alt} />
        <div>
            <p>Welcome, {name}.</p>
            <p>testing....</p>
        </div>
    </div>
</div>

<style>
    .wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

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
