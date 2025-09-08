<script lang="ts">
    import { page } from '$app/state';

    const embeded = $derived(page.url.searchParams.get('embeded') || '');

    const go = () => {
        window.scrollTo({
            top: 2500,
            behavior: 'smooth'
        });
    }
</script>

<div class="page-wrap" style:max-width={embeded === 'true' ? '100%' : '800px'}>
    <div class="header">
        <button onclick={go}>start</button>
    </div>
    <div class="fade"></div>
    <div class="body">
        <h1>스크롤 애니메이션 활용 V2.0.0</h1>
        <h3>의도</h3>
        <p>
            참고자료 찾다보니 요즘 화려하고 세련된 웹사이트들이 많더라고요. <br/>
            특히 상호작용성을 강조하고 싶었는데, 스크롤 애니메이션을 사용한 일부 사이트가 눈에 띄어 적용해보기로 결심.
        </p>
        <h3>공부한 내용</h3>
        <ul>
            <li>css animation</li>
            <li>특성 선택자</li>
            <li>의사 클래스</li>
        </ul>
        <h3>어려웠던 점</h3>
        <ul>
            <li>시각적 효과 디자인하기</li>
            <li>가독성 챙기기</li>
            <li>둘 사이에서 균형 잡기 ㅜㅜ</li>
        </ul>
        <p>
            결국 샘플 제작 후 생각보다 재미없어 보여서 드랍. <br/>
            하지만 나의 허송세월은 계속된다.<br/>
            To be continued...
        </p>
    </div>
</div>

<style>
    .page-wrap {
        width: 100%;
        min-height: 500vh;
        margin: auto;
        position: relative;
    }

    @keyframes fadeout {
        from {
            opacity: 1;
        }
        to {
            opacity: 1;
        }
    }

    .header {
        /* size */
        width: 40%;
        aspect-ratio: 3/2;

        /* position */
        position: fixed;
        top: 50vh;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;

        /* etc */
        background: #ced2d4;
        opacity: 0;

        /* animation */
        animation: fadeout linear;
        animation-timeline: scroll();
        animation-range: 0vh 60vh;
    }

    .fade {
        /* size */
        width: 100%;
        height: 80vh;
        margin-top: 90vh;

        /* position */
        position: relative;
        z-index: 50;

        /* etc */
        background: linear-gradient(180deg,rgba(255, 255, 255, 0) 5%, rgb(255, 255, 255) 50%);
    }

    @keyframes fadein {
        from {
            opacity: 0;
        }
        80% {
            opacity: 1;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes makeScrollable {
        from {
            position: fixed;
            margin-top: 0;
        }
        to {
            position: relative;
            margin-top: 100vh;
        }
    }

    .body {
        /* size */
        width: 100%;
        max-width: 800px;
        min-height: 2000px;
        padding: 25px;
        box-sizing: border-box;

        /* position */
        position: fixed;
        top: 15vh;
        left: 50%;
        transform: translateX(-50%);
        z-index: 100;

        /* etc */
        border-radius: 15px;
        border: 1px solid #e1e5e9;
        opacity: 0;
        background: white;
        pointer-events: none;

        /* animation */
        animation: fadein linear both, makeScrollable step-start both;
        animation-timeline: scroll(), scroll();
        animation-range: 140vh 250vh, 270vh 270vh;
    }

    .body[style*="opacity: 1"], .body[style*="opacity:1"] {
        pointer-events: auto;
    }
</style>