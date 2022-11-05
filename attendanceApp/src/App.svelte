<script>
  import StreamList from './lib/StreamList.svelte';
  import DoLaterButton from './lib/DoLaterButton.svelte';
  import SaveButton from './lib/SaveButton.svelte';
  import Header from './lib/Header.svelte';

  const CURRENT_STREAM = 'A'
  const CURRENT_CLASS = 0
  const CLASS_NAME = 'My Cool Class'
  const CURRENT_WEEK = 1;

</script>

<main>
  <Header currentStream = {CURRENT_STREAM} className = {CLASS_NAME} currentWeek = {CURRENT_WEEK} currentClass = {CURRENT_CLASS} />
  <StreamList currentStream = {CURRENT_STREAM} listStream={'A'} currentClass = {CURRENT_CLASS} />
  <StreamList currentStream = {CURRENT_STREAM} listStream={'B'} currentClass = {CURRENT_CLASS} />
</main>

<style>
</style>
