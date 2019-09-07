<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<svelt:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/tachyons/4.11.1/tachyons.css" />

</svelt:head>

<style>
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>