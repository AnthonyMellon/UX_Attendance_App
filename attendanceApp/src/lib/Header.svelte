<script>
    import { HtmlTagHydration } from "svelte/internal";
    import DoLaterButton from "./DoLaterButton.svelte";
    import SaveButton from "./SaveButton.svelte";

    export let currentStream;
    export let className;
    export let currentWeek;
    export let currentClass;
</script>

<header>
    <section>
        <h1>    
            {className}: Stream {currentStream} 
        </h1>
        <h2>
            Week {currentWeek}, Class {currentClass}
        </h2>
    </section>

    <section aria-label="Buttons" class="Buttons">
        <DoLaterButton />
        <SaveButton currentStream = {currentStream} currentClass = {currentClass} currentWeek = {currentWeek} />
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
        margin-left: 1vw;
    }

</style>