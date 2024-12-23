import React from 'react';
import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext({});

function ToastProvider({children}) {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState('notice');
  const [toasts, setToasts] = React.useState([]);

  useEscapeKey(() => setToasts([]))

  const handleMessageChange = React.useCallback((event) => {
    setMessage(event.target.value);
  }, []);

  const handleVariantChange = React.useCallback((event) => {
    setVariant(event.target.value);
  }, [])

  const handleAddToast = React.useCallback(() => {
    setToasts((currentToasts) => [
      ...currentToasts,
      {
        id: Math.random(),
        message,
        variant,
      }
    ]);

    setMessage('');
    setVariant('notice');
  }, [message, variant])

  const handleRemoveToast = React.useCallback((id) => {
    setToasts((currentToasts) => currentToasts.filter(toast => toast.id !== id));
  }, [])

  return (
    <ToastContext.Provider value={{
      message,
      handleMessageChange,
      variant,
      handleVariantChange,
      toasts,
      handleAddToast,
      handleRemoveToast
    }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
