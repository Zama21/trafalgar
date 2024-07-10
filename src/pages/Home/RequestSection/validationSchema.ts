import * as yup from 'yup';

export const validationSchema = yup
  .object()
  .shape({
    firstName: yup.string().required('Имя обязательно для заполнения'),
    lastName: yup.string().required('Фамилия обязательна для заполнения'),
    topic: yup.string().required('Тема обязательна для заполнения'),
    question: yup.string().required('Вопрос обязателен для заполнения'),
    group: yup.array().of(yup.string().required()).min(1, 'Группа обязательна для выбора'),
    privacyPolicy: yup
      .boolean()
      .oneOf([true], 'Требуется согласие с политикой обработки данных')
      .required('Требуется согласие с политикой обработки данных'),
  })
  .required();
