import React from "react";
import { Form, Formik } from "formik";
import { useNavigate } from 'react-router-dom';
import BaseBtn from '../shared/baseBtn/baseBtn';
import Input from '../shared/input/input';
import { validateForm } from './validate';
import styles from './form.module.scss';

function FormRegidtred(): JSX.Element {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={validateForm}
      onSubmit={() => {
        navigate('/user')
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
