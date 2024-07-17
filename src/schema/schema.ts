import * as yup from 'yup';

const regExpEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const localStorageCheck = (value: string | undefined) => {
  try {
    const key = localStorage.getItem('userData');
    if (!key) {
      return true;
    }
    const userData = JSON.parse(key);
    if (userData.email === value) {
      return false;
    }
  } catch (error) {
    console.error('Ошибка при парсинге данных из localStorage:', error);
    return false;
  }

  return true;
};

export const schema = yup.object().shape({
  name: yup.string().required('Обязательное поле'),
  surname: yup.string().required('Обязательное поле'),
  email: yup
    .string()
    .required('Обязательное поле')
    .matches(regExpEmail, 'Неверный формат email')
    .test('email-unique', 'Пользователь с таким email уже зарегистрирован', localStorageCheck),
  password: yup.string().required('Обязательное поле').min(8, 'Минимум 8 символов'),
  agreeToTerms: yup.boolean().oneOf([true], 'Вы должны согласиться').required('Обязательное поле'),
});
// ------------------------------------------------------------------------------------------

export const getUserData = () => {
  const storedUserData = localStorage.getItem('userData');
  return storedUserData ? JSON.parse(storedUserData) : null;
};

const validateUserExists = (email: string) => {
  const userData = getUserData();
  return userData ? email === userData.email : false;
};

const validatePassword = (password: string) => {
  const userData = getUserData();
  return userData ? password === userData.password : false;
};

export const schemaLoginPage = yup.object().shape({
  email: yup
    .string()
    .required('Поле Email должно быть заполнено')
    .email('Некорректный Email')
    .test('checkUser', 'Пользователь не найден. Пожалуйста, зарегистрируйтесь.', validateUserExists),
  password: yup
    .string()
    .required('Поле Пароль должно быть заполнено')
    .test('checkPassword', 'Неверный пароль', validatePassword),
});
