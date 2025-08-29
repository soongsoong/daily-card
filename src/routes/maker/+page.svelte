<script lang="ts">
    import type { ImgKey } from '$lib/DailyCard/constant';
    import { ImgDef } from '$lib/DailyCard/constant';
    import { page } from '$app/state';

    // 위젯 설정 상태
    let widgetConfig = $state({
        img: 'default' as ImgKey,
        name: '',
        width: 400,
        height: 253
    });

    // iframe 코드
    let iframeCode = $derived(`<iframe\n` + 
        `src="https://soongsoong.github.io/daily-card/?img=${widgetConfig.img}&name=${widgetConfig.name}"\n` +
        `width="${widgetConfig.width}"\n` +
        `height="${widgetConfig.height}"\n` +
        `style="border: none; overflow: hidden;"\n` +
        `></iframe>\n`);

    // 복사 버튼 상태
    let copyButtonText = $state('📋 코드 복사');

    // iframe 코드 복사
    async function copyIframeCode() {
        try {
            await navigator.clipboard.writeText(iframeCode);
            copyButtonText = '복사됨!';
            setTimeout(() => {
                copyButtonText = '📋 코드 복사';
            }, 2000);
        } catch (err) {
            copyButtonText = '복사 실패';
            setTimeout(() => {
                copyButtonText = '📋 코드 복사';
            }, 2000);
        }
    }
</script>

<div class="wrap">
    <header class="header">
        <h1>Daily Card 위젯 제작기</h1>
        <p>타사이트에 삽입할 카드 위젯을 제작하고 미리보기할 수 있습니다.</p>
    </header>

    <div class="content">
        <div class="config-panel">
            <h2>위젯 설정</h2>
            
            <div class="config-group">
                <label for="img-select">이모지 선택:</label>
                <select id="img-select" bind:value={widgetConfig.img}>
                    {#each Object.keys(ImgDef) as key}
                        <option value={key}>{ImgDef[key as ImgKey].label}</option>
                    {/each}
                </select>
            </div>

            <div class="config-group">
                <label for="name-input">이름:</label>
                <input 
                    id="name-input" 
                    type="text" 
                    placeholder="방문자 이름을 입력하세요"
                    bind:value={widgetConfig.name}
                />
            </div>

            <div class="config-group">
                <label for="width-input">너비 (px):</label>
                <input 
                    id="width-input" 
                    type="number" 
                    min="200" 
                    max="800" 
                    bind:value={widgetConfig.width}
                />
            </div>

            <div class="config-group">
                <label for="height-input">높이 (px):</label>
                <input 
                    id="height-input" 
                    type="number" 
                    min="150" 
                    max="600" 
                    bind:value={widgetConfig.height}
                />
            </div>
        </div>

        <!-- 미리보기 패널 -->
        <div class="preview-panel">
            <h2>실시간 미리보기</h2>
            
            <div class="preview-container" style="width: {widgetConfig.width}px; height: {widgetConfig.height}px;">
                <iframe
                    title="daily-card"
                    id="previewIframe"
                    src="{page.url.origin}/?img={widgetConfig.img}&name={widgetConfig.name}"
                    width="{widgetConfig.width}"
                    height="{widgetConfig.height}"
                    style="border: none; overflow: hidden;"
                ></iframe>
            </div>
        </div>
    </div>

    <!-- iframe 코드 생성 패널 -->
    <div class="code-panel">
        <div class="code-header">
            <h2>삽입 코드</h2>
            <button id="copyBtn" class="copy-btn" onclick={copyIframeCode}>
                {copyButtonText}
            </button>
        </div>
        
        <div class="code-container">
            <pre><code>{iframeCode}</code></pre>
        </div>
        
        <div class="usage-info">
            <h3>사용 방법:</h3>
            <ol>
                <li>위의 설정을 원하는 대로 조정하세요</li>
                <li>미리보기에서 결과를 확인하세요</li>
                <li>생성된 iframe 코드를 복사하세요</li>
                <li>타사이트의 HTML에 붙여넣기 하세요</li>
            </ol>
        </div>
    </div>
</div>

<style>
    .wrap {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }

    .header {
        text-align: center;
        margin-bottom: 40px;
        padding: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border-radius: 12px;
    }

    .header h1 {
        margin: 0 0 10px 0;
    }

    .content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
        margin-bottom: 40px;
    }

    .config-panel, .preview-panel {
        background: white;
        border-radius: 12px;
        padding: 25px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border: 1px solid #e1e5e9;
    }

    .config-panel h2, .preview-panel h2 {
        margin: 0 0 20px 0;
        font-size: 1.5rem;
        font-weight: 600;
    }

    .config-group {
        margin-bottom: 20px;
    }

    .config-group label {
        display: block;
        margin-bottom: 8px;
        font-weight: 500;
        color: #4a5568;
    }

    .config-group input, .config-group select {
        width: 100%;
        padding: 10px 12px;
        border: 2px solid #e2e8f0;
        border-radius: 8px;
        font-size: 1rem;
        transition: border-color 0.2s;
        box-sizing: border-box;
    }

    .config-group input:focus, .config-group select:focus {
        outline: none;
        border-color: #667eea;
    }

    .preview-container {
        border: 2px dashed #cbd5e0;
        border-radius: 8px;
        overflow: hidden;
    }

    .code-panel {
        background: white;
        border-radius: 12px;
        padding: 25px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border: 1px solid #e1e5e9;
    }

    .code-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }

    .code-header h2 {
        margin: 0;
        color: #2d3748;
        font-size: 1.5rem;
        font-weight: 600;
    }

    .copy-btn {
        padding: 10px 20px;
        background: #48bb78;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 1rem;
        font-weight: 500;
        transition: background-color 0.2s;
    }

    .copy-btn:hover {
        background: #38a169;
    }

    .code-container {
        background: #2d3748;
        border-radius: 8px;
        padding: 20px;
        margin-bottom: 20px;
        overflow-x: auto;
    }

    .code-container pre {
        margin: 0;
        color: #e2e8f0;
        font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
        font-size: 0.9rem;
        line-height: 1.5;
        white-space: pre-wrap;
        word-break: break-all;
    }

    .usage-info {
        background: #f7fafc;
        border-radius: 8px;
        padding: 20px;
        border-left: 4px solid #667eea;
    }

    .usage-info h3 {
        margin: 0 0 15px 0;
        color: #2d3748;
        font-size: 1.2rem;
        font-weight: 600;
    }

    .usage-info ol {
        margin: 0;
        padding-left: 20px;
        color: #4a5568;
        line-height: 1.6;
    }

    .usage-info li {
        margin-bottom: 8px;
    }

    @media (max-width: 768px) {
        .content {
            grid-template-columns: 1fr;
            gap: 20px;
        }
        
        .config-panel, .preview-panel, .code-panel {
            padding: 20px;
        }
    }
</style>
