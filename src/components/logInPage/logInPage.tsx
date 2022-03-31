import React from 'react';
import Form from '../form/form';
import Heading from '../shared/heading/heading';
import styles from './logInPage.module.scss';

function LogInPage(): JSX.Element {
  return (
    <main className={styles.main}>
      <Heading text='Log In' />
      <Form />
    </main>)
}

export default LogInPage;
