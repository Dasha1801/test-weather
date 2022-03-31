import { FieldHookConfig, useField } from "formik";
import React from "react";
import { IInput } from '../interfaces';
import styles from './input.module.scss';

function Input({
  label,
  ...props
}: IInput & FieldHookConfig<string>): JSX.Element {
  const [field, meta] = useField(props);

  return (
    <label htmlFor={props.name} className={styles.label}>
      {label}
      <input
        {...field}
        className={styles.input}
      />
      {meta.touched && meta.error ? <span className={styles.error}>{meta.error}</span> : null}
    </label>
  );
}

export default Input;
