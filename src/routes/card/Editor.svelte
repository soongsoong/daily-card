<script lang="ts">
    let {code, children} = $props();
</script>

<div class="editor">
    <div>
        <div class="options panel">
            {@render children()}
        </div>
        <div class="code panel">
            <pre><code>{code}</code></pre>
        </div>
    </div>
    <div class="preview panel">
        {@html code}
    </div>
</div>

<style>
    .editor {
        display: flex;
        flex-direction: column;
        gap: 15px;
        width: 100%;
        padding: 20px;
        overflow: hidden;
        box-sizing: border-box;
    }

    .editor > div {
        display: flex;
        gap: 15px;
        max-height: 300px;
        width: 100%;
    }

    .panel {
        border: 1px solid #e1e5e9;
        padding: 15px;
        border-radius: 15px;
    }

    .options {
        display: flex;
        flex-direction: column;
        gap: 12px;
        overflow: scroll;
        width: 45%;
    }

    .code {
        background: #2d3748;
        overflow: scroll;
        flex: 1 1 0;
    }

    .code pre {
        color: #e2e8f0;
        white-space: pre-wrap;
        word-break: break-all;
    }

    .preview {
        justify-content: center;
        box-sizing: border-box;
        background: #e1e5e9;
    }

    
    *::-webkit-scrollbar {
	    width: 0px;
    }
</style>