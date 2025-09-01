<script lang="ts">
    import ExA from './ExA.svelte';
    import ExB from './ExB.svelte';
    import ExC from './ExC.svelte';
    import ExD from './ExD.svelte';
</script>

<svelte:head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/galmuri/dist/galmuri.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap" rel="stylesheet">
</svelte:head>

<div class="cards">
    <ExA name="박병철" />
    <ExB name="박병철" />
    <div class="card">
    </div>
    <ExC name="박병철" />
    <ExD name="박병철" />
    <div class="card">
    </div>
</div>

<style>
    .cards {
        flex: 1 1 0;
        max-width: 700px;
        display: grid;
        grid-template-columns: 3fr 3fr 4fr;
        column-gap: 15px;
        row-gap: 15px;
        align-items: center;
        padding: 10px;
    }

    .card {
        background: white;
        width: 100%;
        height: 100%;
        border-radius: 15px;
        overflow: hidden;
    }

    :global(.card) {
        font-family: 'Galmuri11', sans-serif;
    }

    /* 모바일 반응형 스타일 */
    @media (max-width: 768px) {
        .cards {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr 1fr;
            max-width: 100%;
        }

        .cards > :nth-child(3) {
            grid-column: 1 / -1;
        }

        .cards > :nth-child(6) {
            grid-column: 1 / -1;
        }
    }
</style>