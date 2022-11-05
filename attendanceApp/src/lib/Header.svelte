<script>
    import { HtmlTagHydration } from "svelte/internal";
    import DoLaterButton from "./DoLaterButton.svelte";
    import SaveButton from "./SaveButton.svelte";

    export let currentStream;
</script>

<header>
    <h1>    
        Stream {currentStream}
    </h1>
    <section aria-label="Buttons" class="Buttons">
        <DoLaterButton />
        <SaveButton />
    </section>

</header>


<style>
    header {
        display: flex;
        flex-direction: row;
        background-color: red;
        width: 100vw;
    }

    .Buttons {
        margin: auto;        
        margin-right: 1vw;
        height: auto;
    }

    h1 {

    }
</style>