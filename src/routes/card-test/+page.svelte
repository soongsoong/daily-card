<script lang="ts">
    import { page } from '$app/state';
    import {weathers, states} from '$lib/Cards/constant';
    import Editor from './Editor.svelte';

    const embeded = $derived(page.url.searchParams.get('embeded') || '');

    // URL 생성을 위한 공통 함수
    function createUrl(def: Record<string, any>, path: string): string {
        const origin = page.url.hostname === 'localhost' ?
            page.url.origin :
            'https://soongsoong.github.io/daily-card';

        const searchParams = Object.entries(def)
            .map(([key, value]) => `${key}=${value}`)
            .join('&');

        return origin + path + '/?' + searchParams;
    }

    let profileDef = $state({
        date: '09/01',
        weather: 0,
        state: 0,
        src: 'https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg',
        alt: 'profile'
    });

    let profileCode = $derived(`<iframe src=${createUrl(profileDef, '/profile')} id="embeded-profile"></iframe>`);

    let playerDef = $state({
        title: '제목',
        artist: '가수',
        src: 'https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg',
        alt: 'cover_image',
        url: ''
    });

    let playerCode = $derived(`<iframe src=${createUrl(playerDef, '/player')} id="embeded-player"></iframe>`);

    let previewCode = $state('');
</script>

<div class="page-wrap" style:max-width={embeded === 'true' ? '100%' : '700px'}>
    <Editor code={profileCode}>
        <div class="option">
            <label for="date-input">날짜</label>
            <input
                    id="date-input"
                    type="text"
                    bind:value={profileDef.date}
            />
        </div>
        <div class="option">
            <label for="weather-select">날씨</label>
            <select id="weather-select" bind:value={profileDef.weather}>
                {#each weathers as x, idx}
                    <option value={idx}>{x.alt}</option>
                {/each}
            </select>
        </div>
        <div class="option">
            <label for="state-select">상태</label>
            <select id="state-select" bind:value={profileDef.state}>
                {#each states as x, idx}
                    <option value={idx}>{x.label}</option>
                {/each}
            </select>
        </div>
        <div class="option">
            <label for="src-input">배경이미지</label>
            <input
                    id="src-input"
                    type="text"
                    bind:value={profileDef.src}
            />
        </div>
        <div class="option">
            <label for="alt-input">배경설명</label>
            <input
                    id="alt-input"
                    type="text"
                    bind:value={profileDef.alt}
            />
        </div>
    </Editor>
    <Editor code={playerCode}>
        <div class="option">
            <label for="title-input">제목</label>
            <input
                    id="title-input"
                    type="text"
                    bind:value={playerDef.title}
            />
        </div>
        <div class="option">
            <label for="artist-input">아티스트</label>
            <input
                    id="artist-input"
                    type="text"
                    bind:value={playerDef.artist}
            />
        </div>
        <div class="option">
            <label for="src-input">배경이미지</label>
            <input
                    id="src-input"
                    type="text"
                    bind:value={playerDef.src}
            />
        </div>
        <div class="option">
            <label for="alt-input">배경설명</label>
            <input
                    id="alt-input"
                    type="text"
                    bind:value={playerDef.alt}
            />
        </div>
        <div class="option">
            <label for="url-input">링크</label>
            <input
                    id="url-input"
                    type="text"
                    bind:value={playerDef.url}
            />
        </div>
    </Editor>

    <!-- <div class="preview">
        <textarea bind:value={previewCode}></textarea>
        <div>
            {@html previewCode}
        </div>
    </div> -->
</div>

<style>
    .page-wrap {
        margin: auto;
    }

    .option > label {
        color: #4a5568;
        margin-bottom: 8px;
        display: block;
    }

    .option input, .option select {
        width: 100%;
        padding: 10px 12px;
        border: 2px solid #e2e8f0;
        border-radius: 8px;
        font-size: 1rem;
        box-sizing: border-box;
    }

    .preview {
        padding: 20px;
    }

    .preview > textarea {
        width: 100%;
        height: 100px;
        margin-bottom: 15px;
        box-sizing: border-box;
    }

    .preview > div {
        height: 300px;
        border: 1px solid #e1e5e9;
    }

    :global(#embeded-profile) {
        aspect-ratio: 0.7/1;
        height: 200px;
        transition: transform 150ms ease;
        cursor: pointer;
    }

    :global(#embeded-profile:hover) {
        transform: translateY(-5px);

    }

    :global(#embeded-player) {
        height: 120px;
        flex: 1 1 0;
        transition: transform 150ms ease;
        cursor: pointer;
    }

    :global(#embeded-player:hover) {
        transform: translateY(-3px);
    }
</style>
