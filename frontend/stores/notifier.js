import { create } from 'zustand';

const useNotifierStore = create((set) => {
	return {
		message: '',
		type: '',
		isVisible: false,
		showNotifier: (data) => {
			set(() => {
				return {
					message: data.message,
					type: data.type,
					isVisible: true,
				};
			});
			setTimeout(() => {
				set(() => {
					return {
						isVisible: false,
					};
				});
			}, 5000);
		},
	};
});

export {
	useNotifierStore,
};
