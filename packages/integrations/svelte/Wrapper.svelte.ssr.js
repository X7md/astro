/* App.svelte generated by Svelte v3.38.2 */
import { create_ssr_component, missing_component, validate_component } from 'svelte/internal';

const App = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const { __astro_component: Component, __astro_children, ...props } = $$props;
	const children = {};
	if (__astro_children != null) {
		children.default = () => `<astro-fragment>${__astro_children}</astro-fragment>`;
	}

	return `${validate_component(Component || missing_component, 'svelte:component').$$render(
		$$result,
		Object.assign(props),
		{},
		children
	)}`;
});

export default App;
