import React from "react";
import styles from './MyButton.module.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: any;
}

const MyButton = ({ children, ...props }: ButtonProps) => {
  return (
    <button className={styles.myBtn} {...props}>
      {children}
    </button>
  );
};

export default MyButton;
