import React from "react";
import { Form, Formik } from "formik";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getDataWeather } from '../../redux/asyncActions';
import { logIn } from '../../redux/slices/logInSlice';
import BaseBtn from '../shared/baseBtn/baseBtn';
import Input from '../shared/input/input';
import { validateForm } from './validate';
import styles from './form.module.scss';

function FormRegidtred(): JSX.Element {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={validateForm}
      onSubmit={() => {
        dispatch(logIn(true));
        navigate('/user');
        getDataWeather()(dispatch);
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
