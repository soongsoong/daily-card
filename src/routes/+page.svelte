<script lang="ts">
    import { page } from '$app/state';
    import {weathers, states} from '$lib/Cards/constant';

    let profileDef = $state({
        date: '09/01',
        weather: 0,
        state: 0,
        src: 'https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg',
        alt: 'profile'
    });

    let profileUrl = $derived.by(() => {
        const origin = page.url.hostname === 'localhost' ?
            page.url.origin :
            'https://soongsoong.github.io/daily-card';

        const searchParams =
            `/?date=${profileDef.date}` +
            `&weather=${profileDef.weather}` +
            `&state=${profileDef.state}` +
            `&src=${profileDef.src}` +
            `&alt=${profileDef.alt}`;

        return origin + '/profile' + searchParams;
    });

    let profileCode = $derived(
        `<iframe` +
        `   title="profile"` +
        `   src=${profileUrl}` +
        `   style="aspect-ratio: 0.7/1"` +
        `></iframe>`
    );

    let playerDef = $state({
        title: '거울',
        artist: '한로로',
        src: 'https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg',
        alt: 'profile'
    });

    let playerUrl = $derived.by(() => {
        const origin = page.url.hostname === 'localhost' ?
            page.url.origin :
            'https://soongsoong.github.io/daily-card';

        const searchParams =
            `/?title=${playerDef.title}` +
            `&artist=${playerDef.artist}` +
            `&src=${playerDef.src}` +
            `&alt=${playerDef.alt}`;

        return origin + '/player' + searchParams;
    });

    let playerCode = $derived(
        `<iframe` +
        `   title="profile"` +
        `   src=${playerUrl}` +
        `   style="aspect-ratio: 0.7/1"` +
        `></iframe>`
    );
</script>

<div class="wrap">
    <div class="row">
        <div class="options">
            <div class="option">
                <label for="date-input">제목</label>
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
        </div>
        <div class="preview">
            {@html profileCode}
        </div>
        <div class="code">
            <pre><code>{profileCode}</code></pre>
        </div>
    </div>
    <div class="row">
        <div class="options">
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
        </div>
        <div class="preview">
            {@html playerCode}
        </div>
        <div class="code">
            <pre><code>{playerCode}</code></pre>
        </div>
    </div>
</div>

<style>
    .row {
        display: flex;
        justify-content: center;
        gap: 15px;
        width: 100%;
        padding: 20px;
        overflow: hidden;
        box-sizing: border-box;
    }

    .row > div {
        border: 1px solid #e1e5e9;
        border-radius: 15px;
        padding: 25px;
    }

    .options {
        display: flex;
        flex-direction: column;
        gap: 12px;
        min-width: 300px;
    }

    .option > label {
        font-weight: 500;
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
        transition: border-color 0.2s;
        box-sizing: border-box;
    }

    .code {
        background: #2d3748;
        padding: 20px;
    }

    .code pre {
        color: #e2e8f0;
        font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
        font-size: 0.9rem;
        line-height: 1.5;
        white-space: pre-wrap;
        word-break: break-all;
    }
</style>
