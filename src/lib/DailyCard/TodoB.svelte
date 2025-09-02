<script lang="ts">
    import { todos } from './constant';
    import SunnyIcon from '$lib/assets/sunny_1.svg';
</script>

<div class="card todos">
<!--    <h1>To Do</h1>-->
    {#each todos as todo}
        <div class="todo">
            <img src={SunnyIcon} alt="sunny icon" />
            <p>{todo.text}</p>
            <p style="background:{(todo.status==='완료' ? 'rgb(198 239 198)' : 'rgb(249 196 196)')}">{todo.status}</p>
        </div>
    {/each}
</div>

<style>
    .todos {
        padding: 15px 25px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .todo {
        transition: transform 150ms ease, box-shadow 150ms ease, background-color 150ms ease, border-color 150ms ease;
        display: flex;
        align-items: center;
        padding: 7px;
        border-radius: 10px;
    }

    .todo > img {
        box-sizing: border-box;
        height: 20px;
        margin-right: 10px;
    }

    .todo > p:first-child {
        font-size: 14px;
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
        margin: 0 0 5px;
        font-size: 18px;
    }
</style>