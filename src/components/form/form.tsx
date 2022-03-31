import React from "react";
import { Form, Formik } from "formik";
import Input from '../shared/input/input';
import BaseBtn from '../shared/baseBtn/baseBtn';
import styles from './form.module.scss';

function FormRegidtred(): JSX.Element {

  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <Form className={styles.form}>
          <Input label="Email" name="email" />
          <Input label="Password" name="password" />
          <BaseBtn text='Submit' />
        </Form>
      )}
    </Formik>
  );
}
export default FormRegidtred;
