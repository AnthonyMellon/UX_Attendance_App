<script>
  import StreamList from './lib/StreamList.svelte';
  import DoLaterButton from './lib/DoLaterButton.svelte';
  import SaveButton from './lib/SaveButton.svelte';
  import Header from './lib/Header.svelte';
    import { each } from 'svelte/internal';

  const CURRENT_STREAM = 'A'
  const STREAMS = ['A', 'B'];
  const CURRENT_CLASS = 0
  const CLASS_NAME = 'My Cool Class'
  const CURRENT_WEEK = 3;

</script>

<main>
  <Header currentStream = {CURRENT_STREAM} className = {CLASS_NAME} currentWeek = {CURRENT_WEEK} currentClass = {CURRENT_CLASS} />
  {#each STREAMS as stream}
    <StreamList currentStream = {CURRENT_STREAM} listStream={stream} currentClass = {CURRENT_CLASS} currentWeek = {CURRENT_WEEK} />
  {/each}
</main>

<style>
</style>
