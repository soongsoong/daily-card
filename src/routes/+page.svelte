<script lang="ts">
    import {page} from "$app/state";

    const urls = [
        {label: "위젯 (빌더)", src:"card-test"},
        {label: "스크롤 애니메이션", src:"scroll-test"},
        {label: "윈도우창", src:"window-test"},
        {label: "맵", src:"map-test"},
    ];

    let selected = $state(0);
    let url = $state("");

    $effect(()=>{
        const origin = page.url.hostname === 'localhost' ?
            page.url.origin :
            'https://soongsoong.github.io/daily-card';

        url = `${origin}/${urls[selected].src}/?embeded=true`;
    });
</script>

<div class="wrap">
    <select id="weather-select" bind:value={selected}>
        {#each urls as x, idx}
            <option value={idx}>{x.label}</option>
        {/each}
    </select>
    <input
        id="src-input"
        type="text"
        bind:value={url}
    />
    <div id="iframe-wrap">
        <iframe
                title="example"
                src={url}
        ></iframe>
    </div>
</div>

<style>
    .wrap {
        width: 100%;
        max-width: 700px;
        height: 100vh;
        margin: auto;
        padding: 25px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    input, select {
        width: 100%;
        padding: 10px 12px;
        border: 2px solid #e2e8f0;
        border-radius: 8px;
        font-size: 1rem;
        box-sizing: border-box;
    }

    #iframe-wrap {
        width: 100%;
        flex: 1 1 0;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        overflow: hidden;
    }

    iframe {
        width: 100%;
        height: 100%;
        padding: 10PX;
        box-sizing: border-box;
    }
</style>