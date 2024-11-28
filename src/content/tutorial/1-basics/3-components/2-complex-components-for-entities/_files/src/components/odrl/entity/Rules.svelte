<script>
	import Schemas from '@/lib/schemas';
	import Rule from './Rule.svelte';

	let rules;
	export { rules as value };
	export let componentConfig = {};
	export let label = 'Rule';
	export let jsonPath = '';

	if (componentConfig.label) {
		label = componentConfig.label;
	}

	function addRule() {
		// TODO
	}

	function onRemoveRule(event) {
		// TODO
	}

	function printJsonPath() {
		console.log(jsonPath);
	}
</script>

<!-- TODO -->