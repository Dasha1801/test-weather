import { FieldHookConfig, useField } from "formik";
import React from "react";
import { IInput } from '../interfaces';
import styles from './input.module.scss';

function Input({
  label,
  ...props
}: IInput & FieldHookConfig<string>): JSX.Element {
  const [field] = useField(props);

  return (

    <label htmlFor={props.name} className={styles.label}>
      {label}
      <input
        {...field}
        className={styles.input}
      />
    </label>

  );
}

export default Input;
