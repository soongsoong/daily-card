<script lang="ts">
    import {page} from "$app/state";

    // params
    const embedded = $derived(page.url.searchParams.get('embedded') || '');
    const src = $derived(page.url.searchParams.get('src') || '');
    const alt = $derived(page.url.searchParams.get('alt') || '');
</script>

<div class="page-wrap" style:max-width={embedded === 'true' ? '100%' : '800px'}>
    <div>

    </div>
    <div class="map">
        <div class="block">
            <div class="area"></div>
            <div class="path"></div>
            <div class="area"></div>
        </div>

        <div class="path"></div>

        <div class="banner">
            <div class="custom-border" style:z-index="1000">
                <div id="profile-image">
                    <img {src} {alt} />
                </div>
            </div>
            <div class="custom-border" style:margin-left="8px">
                <div id="banner-msg">
                    25년 9월 7일 : V3.0.1
                </div>
            </div>
        </div>

        <div class="path"></div>

        <div class="area">
            <h3>개요</h3>
            <p>3차 예시 화면입니다.</p>
            <p>
                스스그 그룹장으로서 게임적 요소를 결합해 보려고 했어요. <br/>
                거기에 스크롤 애니메이션을 첨가한... <br/>
                하지만 그전에 드랍함. <br/>
            </p>
            <h3>공부한 내용</h3>
            <ul>
                <li>css brefore, after 선택자의 활용</li>
                <li>border, outline, box-shadow의 활용</li>
                <li>css 변수 사용법</li>
            </ul>
            <h3>느낀점</h3>
            <ul>
                <li>디자인은 디자이너에게</li>
                <li>css는 그저 노가다지만 어떻게 사람 눈을 속일지 고민하는 것은 재미있다.</li>
            </ul>
            <p>예를 들면 위의 대화창 같은 부분은 border가 저렇게 비정형으로 생성될 수 없어서 각 모서리에 8X8의 정사각형을 붙여 아래와 같이 처리함.</p>
            <p style="padding: 15px; background: #434343; color: white;">
                <i>bottom: -4px;</i><br/>
                <i>right: -4px;</i><br/>
                <i>background: black;</i><br/>
                <i>box-shadow: 6px 6px 0 2px var(--main-bg-color), inset -4px -4px var(--banner-bg-color);</i><br/>
            </p>
        </div>
    </div>
</div>

<style>
    .page-wrap {
        width: 100%;
        margin: auto;
        padding-top: 50px;
    }

    .map {
        /* size */
        width: 100%;
        margin: auto;
        box-sizing: border-box;

        /* position */
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .area {
        /* size */
        box-sizing: border-box;

        /* etc */
        background: var(--map-bg-color);
        border-radius: 15px;
    }

    .path {
        background: var(--map-bg-color);
        box-shadow: 0 0 0 1px var(--map-bg-color);
    }

    .block {
        /* size */
        width: 80%;
        aspect-ratio: 2/1;

        /* position */
        display: flex;
        flex-direction: row;
    }

    .block > .area:first-child {
        width: 65%;
    }

    .block > .path {
        width: 5%;
        height: 18%;
        margin-top: 20%;
    }

    .block > .area:last-child  {
        width: 30%;
        height: 70%;
    }

    .map > .path {
        width: 11%;
        aspect-ratio: 4/1;
        margin-right: 60%;
    }

    .map > .area {
        width: 80%;
        padding: 25px;

        display: flex;
        flex-direction: column;
        gap: 15px;

        border-radius: 20px;
        font-family: 'Galmuri11', sans-serif;
    }

    .banner {
        /* size */
        width: 100%;
        aspect-ratio: 5/1;
        margin-top: 10px;

        /* position */
        display: flex;
        align-items: flex-end;
    }

    .custom-border {
        /* position */
        position: relative;
        z-index: 100;

        /* etc */
        background: var(--banner-bg-color);
        border: 4px solid var(--banner-border-color);
        outline: 4px solid var(--banner-bg-color);
        border-top: 6px solid var(--banner-border-color);
    }

    .custom-border:before,
    .custom-border:after,
    .custom-border>:first-child:before,
    .custom-border>:first-child:after {
        /* size */
        width: 8px;

        /* position */
        position:absolute;

        /* etc */
        content: ' ';
        background: var(--banner-border-color);
    }

    .custom-border:before, .custom-border:after {
        height: 10px;
        top: -6px;
    }

    .custom-border:before {
        left: -4px;
        box-shadow: -6px -6px 0 2px var(--main-bg-color), inset 4px 4px var(--banner-bg-color);
    }

    .custom-border:after{
        right: -4px;
        box-shadow: 6px -6px 0 2px var(--main-bg-color), inset -4px 4px var(--banner-bg-color);
    }

    .custom-border>:first-child:before, .custom-border>:first-child:after {
        height: 8px;
        bottom: -4px;
    }

    .custom-border>:first-child:before {
        right: -4px;
        box-shadow: 6px 6px 0 2px var(--main-bg-color), inset -4px -4px var(--banner-bg-color);
    }

    .custom-border>:first-child:after {
        left: -4px;
        box-shadow: -6px 6px 0 2px var(--main-bg-color), inset 4px -4px var(--banner-bg-color);
    }

    .banner > div:first-child {
        height: 100%;
        width: 30%;
    }

    #profile-image {
        /* size */
        width: calc(100% - 20px);
        height: calc(100% - 20px);
        margin: 10px;
        box-sizing: border-box;

        /* etc */
        border: 3px solid black;
    }

    #profile-image > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .banner > div:last-child {
        height: 80%;
        width: 70%;
    }

    #banner-msg {
        /* size */
        width: 100%;
        height: 100%;
        padding: 25px;
        box-sizing: border-box;

        /* etc */
        font-family: 'Galmuri11', sans-serif;
        font-size: 18px;
    }
</style>