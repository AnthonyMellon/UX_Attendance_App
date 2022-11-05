<script>
  import StreamList from './lib/StreamList.svelte';
  import DoLaterButton from './lib/DoLaterButton.svelte';
  import SaveButton from './lib/SaveButton.svelte';
  import Header from './lib/Header.svelte';

  const CURRENT_STREAM = 'A'

</script>

<main>
  <Header currentStream = {CURRENT_STREAM} />
  <StreamList currentStream = {CURRENT_STREAM} listStream={'A'} />
  <StreamList currentStream = {CURRENT_STREAM} listStream={'B'} />
</main>

<style>
</style>
