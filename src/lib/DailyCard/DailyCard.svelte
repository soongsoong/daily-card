<script lang="ts">
    import ProfileB from './ProfileB.svelte';
    import PlayerB from './PlayerB.svelte';
    import TodoB from './TodoB.svelte';
</script>

<svelte:head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/galmuri/dist/galmuri.css" />
</svelte:head>

<div class="cards">
    <ProfileB />
    <PlayerB />
    <TodoB />
</div>

<style>
    .cards {
        flex: 1 1 0;
        max-width: 700px;
        display: grid;
        grid-template-columns: 3fr 7fr;
        grid-template-rows: 4fr 6fr;
        column-gap: 15px;
        row-gap: 15px;
        align-items: center;
        padding: 10px;
        aspect-ratio: 2.5/1;
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

    :global(.profile) {
        grid-column: 1 / 2;
        grid-row: 1 / 3;
    }

    :global(.player) {
        grid-column: 2 / 3;
        grid-row: 1 / 2;
    }

    :global(.todos) {
        grid-column: 2 / 3;
        grid-row: 2 / 3;
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