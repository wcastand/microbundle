const VHomeComponent = {
	render(h) {
		return h('span');
	},
};

export default VHomeComponent;

export const VHomePlugin = {
	install: (Vue, opts) => {
		Vue.component('VHome', VHomeComponent);
	},
};
