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
        from {
            transform: translate(-50%, -50%);
        }
        to {
            transform: translate(-50%, -30%);
        }
    }

    #second {
        /* animation */
        animation: second ease both;
        animation-timeline: scroll();
        animation-range: 0vh 40vh;
    }

    @keyframes third {
        from {
            transform: translate(-50%, -50%);
        }
        to {
            transform: translate(-50%, -57%);
        }
    }

    #third {
        /* animation */
        animation: third ease both;
        animation-timeline: scroll();
        animation-range: 0vh 40vh;
    }
</style>