import React from "react";
import { IPropsBtn } from "../interfaces";
import styles from "./baseBtn.module.scss";

function BaseBtn({ text, onClick }: IPropsBtn): JSX.Element {
  return (
    <button
      type='submit'
      className={styles.baseButton}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default BaseBtn;
