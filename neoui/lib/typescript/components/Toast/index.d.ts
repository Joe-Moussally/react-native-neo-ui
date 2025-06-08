import React from 'react';
import { ToastContextValue, ToastProps, ToastProviderProps } from './types';
export declare const useToast: () => ToastContextValue;
declare const Toast: React.FC<ToastProps & {
    onRemove: () => void;
}>;
export declare const ToastProvider: React.FC<ToastProviderProps>;
export declare const RootToastProvider: React.FC<{
    children: React.ReactNode;
}>;
export declare const toast: {
    show: (message: string, options?: Partial<Omit<ToastProps, "message">>) => string;
    success: (message: string, options?: Partial<Omit<ToastProps, "message">>) => string;
    error: (message: string, options?: Partial<Omit<ToastProps, "message">>) => string;
    warning: (message: string, options?: Partial<Omit<ToastProps, "message">>) => string;
    info: (message: string, options?: Partial<Omit<ToastProps, "message">>) => string;
    hide: (id: string) => void;
    hideAll: () => void;
};
export * from './types';
export { Toast };
//# sourceMappingURL=index.d.ts.map