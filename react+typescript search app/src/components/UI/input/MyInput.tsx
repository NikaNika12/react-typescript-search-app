import React from "react";
import "../../../styles/App.css";
import { InputProps } from "../../../types/types";
import styles from "../input/MyInput.module.css";

const MyInput = React.forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref) => {
    return <input className={styles.myInput} ref={ref} {...props} />;
  }
);
MyInput.displayName = "MyInput";

export default MyInput;
