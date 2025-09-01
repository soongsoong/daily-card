<script lang="ts">
    import { todos } from './constant';
</script>

<div class="card todos">
    <h1>To Do</h1>
    {#each todos as todo}
        <div class="todo">
            <p>{todo.text}</p>
            <p style="background:{(todo.status==="완료" ? "rgb(198 239 198)" : "rgb(249 196 196)")}">{todo.status}</p>
        </div>
    {/each}
</div>

<style>
    .card {
        /* background-color: #ffffff;
        border: 1px solid rgba(0, 0, 0, 0.06);
        border-radius: 12px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.06); */
    }

    .todos {
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .todo {
        background-color: #fafafa;
        border: 1px solid rgba(0, 0, 0, 0.05);
        border-radius: 10px;
        padding: 10px 14px;
        transition: transform 150ms ease, box-shadow 150ms ease, background-color 150ms ease, border-color 150ms ease;
        display: flex;
        align-items: center;
    }

    .todo > p:last-child {
        margin-left: auto;
        padding: 5px 10px;
        font-size: 12px;
        border-radius: 7px;
    }

    .todo:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
        background-color: #ffffff;
        border-color: rgba(0, 0, 0, 0.08);
    }

    .todo p {
        margin: 0;
        color: #222222;
        font-size: 0.95rem;
        line-height: 1.5;
    }

    h1 {
        margin: 5px 10px 10px;
        font-size: 22px;
    }
</style>