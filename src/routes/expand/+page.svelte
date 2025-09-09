<script lang="ts">
    import {page} from "$app/state";

    const origin = page.url.hostname === 'localhost' ?
        page.url.origin :
        'https://soongsoong.github.io/daily-card';
</script>

<div>
    <iframe
        id="first"
        title="first"
        src={`${origin}/expand/first`}
    ></iframe>
    <iframe
        id="second"
        title="second"
        src={`${origin}/expand/second`}
    ></iframe>
    <iframe
        id="third"
        title="third"
        src={`${origin}/expand/third`}
    ></iframe>

    <div class="">
        글글글글
    </div>
</div>

<style>
    div {
        /* size */
        width: 100%;
        min-height: 200vh;

        /* position */
        position: relative;
    }

    iframe {
        /* size */
        width: 100%;
        max-width: 700px;
        aspect-ratio: 1/1;

        /* position */
        position: fixed;
        top: 50vh;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    @keyframes second {
        0% {
            transform: translate(-50%, -50%) scale(1);
        }
        30% {
            transform: translate(-50%, -20%) scale(1.15);
        }
        70% {
            transform: translate(-50%, -35%) scale(1.08);
        }
        100% {
            transform: translate(-50%, -30%) scale(1);
        }
    }

    #second {
        /* animation */
        animation: second cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        animation-timeline: scroll();
        animation-range: 0vh 50vh;
    }

    @keyframes third {
        0% {
            transform: translate(-50%, -50%) scale(1);
        }
        30% {
            transform: translate(-50%, -65%) scale(1.15);
        }
        70% {
            transform: translate(-50%, -50%) scale(1.08);
        }
        100% {
            transform: translate(-50%, -57%) scale(1);
        }
    }

    #third {
        /* animation */
        animation: third cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        animation-timeline: scroll();
        animation-range: 0vh 50vh;
    }
</style>