import React from "react";
import { Form, Formik } from "formik";
import Input from '../shared/input/input';
import BaseBtn from '../shared/baseBtn/baseBtn';
import styles from './form.module.scss';
import { validateForm } from './validate';

function FormRegidtred(): JSX.Element {

  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={validateForm}
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
