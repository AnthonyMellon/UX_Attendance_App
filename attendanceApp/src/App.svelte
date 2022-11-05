<script>
  import StreamList from './lib/StreamList.svelte';
  import DoLaterButton from './lib/DoLaterButton.svelte';
  import SaveButton from './lib/SaveButton.svelte';
  import Header from './lib/Header.svelte';

</script>

<main>
  <Header />
  <StreamList currentStream = {'A'} listStream={'A'} />
  <StreamList currentStream = {'A'} listStream={'B'} />
</main>

<style>
</style>
