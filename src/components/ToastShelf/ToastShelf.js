import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import {ToastContext} from "../ToastProvider";

function ToastShelf() {
  const {toasts, handleRemoveToast} = React.useContext(ToastContext);

  return (
    <ol className={styles.wrapper} role={"region"} aria-live={"polite"} aria-label={"Notification"}>
      {toasts?.map(({id, message, variant}) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast message={message} variant={variant} handleDismiss={() => handleRemoveToast(id)}/>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
