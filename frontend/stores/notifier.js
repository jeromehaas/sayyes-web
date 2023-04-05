import { create }  from "zustand";

const useNotifierStore = create((set, get) => ({
    message: '',
    type: '',
    isVisible: false,
    showNotifier: (data) => {
        set(() => ({ 
            message: data.message,
            type: data.type,
            isVisible: true
         }));
         setTimeout(() => {
            set(() => ({
                isVisible: false
            }));
         }, 5000);
    },
}));

export { 
    useNotifierStore 
};