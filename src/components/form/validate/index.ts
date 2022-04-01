import * as Yup from 'yup';

export const validateForm = Yup.object({
  email: Yup.string()
    .test('isEmailValid', 'Invalid email',
      (value): boolean => value === 'test@test.org')
    .required(),
  password: Yup.string()
    .test('isPasswordValid', 'Invalid password',
      (value): boolean => value === 'password')
    .required(),
});

