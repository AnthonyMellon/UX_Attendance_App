<script>
    import { HtmlTagHydration } from "svelte/internal";
    import DoLaterButton from "./DoLaterButton.svelte";
    import SaveButton from "./SaveButton.svelte";
</script>


<h1>
    <DoLaterButton />
    <SaveButton />
</h1>

<style>
    h1 {
        background-color: red;
    }
</style>