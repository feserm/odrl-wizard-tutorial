<script>
	export let rule;
	export let index;
	export let componentConfig = {};

	let label = 'Rule';
	if (componentConfig.label) {
		label = componentConfig.label;
	}

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	function removeRule() {
		// TODO
	}
</script>

<!-- TODO -->
