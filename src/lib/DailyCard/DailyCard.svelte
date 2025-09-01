<script lang="ts">
    import ProfileB from './ProfileB.svelte';
    import PlayerA from './PlayerA.svelte';
    import TodoA from './TodoA.svelte';
</script>

<svelte:head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/galmuri/dist/galmuri.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap" rel="stylesheet">
</svelte:head>

<div class="cards">
    <ProfileB name="박병철" />
    <PlayerA />
    <TodoA />
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

    :global(.card) {
        font-family: 'Galmuri11', sans-serif;
        background: white;
        width: 100%;
        height: 100%;
        border-radius: 15px;
        box-sizing: border-box;
        /* border: 1px solid rgb(219, 219, 219); */
    }

    /* 모바일 반응형 스타일 */
    @media (max-width: 768px) {
        .cards {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            max-width: 100%;
        }

        :global(.todos) {
            grid-column: 1 / -1;
        }
    }
</style>