import React from "react";
import styles from "./MyModal.module.css";

interface ModalProps {
  children: React.ReactNode;
  visible: boolean;
  setVisible: (isOpen: boolean) => void;
}

const MyModal = ({ children, visible, setVisible }: ModalProps) => {
  const rootClasses = [styles.myModal];

  if (visible) {
    rootClasses.push(styles.active);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div
        className={styles.myModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default MyModal;
