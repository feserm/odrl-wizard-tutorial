<script>
	import { explanationActionFactory } from '@/lib/actions/explanation';

	export let label = '';
	export let odrlLevel = null;
	export let attr;
	export let value;
	export let showLabel = true;
	export let focus = false;

	if (!label) {
		label = attr;
	}

	import { appstate } from '@/stores/appstate';
	import { getContext } from 'svelte';

	if (!odrlLevel) {
		odrlLevel = getContext('odrlLevel');
	}

	let explanationAction = explanationActionFactory(odrlLevel);

	function setFocus(el) {
		if ($appstate == appstate.QUESTIONNAIRE && focus) {
			el.focus();
		}
	}
</script>
