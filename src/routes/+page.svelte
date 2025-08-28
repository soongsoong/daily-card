<script>
    import { page } from '$app/state';

    $: name = page.url.searchParams.get('name') || ''
</script>

<h1>Welcome, {name}.</h1>