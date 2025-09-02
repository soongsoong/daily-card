<script lang="ts">
    import {page} from "$app/state";

    // params
    const title = $derived(page.url.searchParams.get('title') || '');
    const artist = $derived(page.url.searchParams.get('artist') || '');
    const src = $derived(page.url.searchParams.get('src') || '');
    const alt = $derived(page.url.searchParams.get('alt') || '');
</script>

<div class="card player">

</div>