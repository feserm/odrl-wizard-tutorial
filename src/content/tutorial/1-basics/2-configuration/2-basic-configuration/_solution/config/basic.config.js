window.config = {
	general: {
		layoutMode: 'standalone',
		initialView: 'init', 
		showProgressBar: true
	},

	prefill: [
		{
			type: 'value',
			odrlMapping: {
				entity: 'policy',
				attribute: '@context'
			},
			value: 'https://www.w3.org/ns/odrl.jsonld'
		},
		{
			type: 'value',
			odrlMapping: {
				entity: 'policy',
				attribute: '@type'
			},
			value: 'Set'
		}
	],

	checklist: {}
};
