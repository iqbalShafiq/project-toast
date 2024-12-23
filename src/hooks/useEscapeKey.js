import React from "react";

const useEscapeKey = (callback) => {
  React.useEffect(() => {
    const escapeListener = (event) => {
      if (event.key === 'Escape') {
        callback();
      }
    }

    document.addEventListener('keydown', escapeListener);

    return () => {
      document.removeEventListener('keydown', escapeListener);
    }
  }, [callback])
}

export default useEscapeKey;