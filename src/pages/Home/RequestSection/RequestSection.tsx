import React, { useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import styled, { css } from 'styled-components';
import { yupResolver } from '@hookform/resolvers/yup';

import Typography from '../../../Typography';
import { validationSchema } from './validationSchema';
import FormControl from './FormControl';
import DropdownNestedCheckboxes from '../../../components/NestedCheckboxes/DropdownNestedCheckboxes';
import { GROUP_DATA } from '../../../constants/constants';
import Modal from './ModalOverlay';
import Button from '../../../components/Button';

interface IFormInput {
  firstName: string;
  lastName: string;
  topic: string;
  question: string;
  group: string[];
  privacyPolicy: boolean;
}

const RequestSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',
    defaultValues: {
      group: [],
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setIsModalOpen(true);
  };

  return (
    <>
      <AppWrapper>
        <ImgWrapper />
        <FormWrapper>
          <Header>
            <Title variant="h2">Начать использование</Title>
            <SubTitle variant="bodyL">Хотите начать сотрудничество? Напишите нам</SubTitle>
          </Header>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <UsernameSecondName>
              <FormControl
                label="Имя"
                id="firstName"
                register={register('firstName')}
                errors={errors.firstName}
                placeholder="Иван"
              />

              <FormControl
                label="Фамилия"
                id="lastName"
                register={register('lastName')}
                errors={errors.lastName}
                placeholder="Иванов"
              />
            </UsernameSecondName>

            <FormControl
              label="Тема"
              id="topic"
              register={register('topic')}
              errors={errors.topic}
              placeholder="Сотрудничество"
            />

            <FormControl
              label="Вопрос"
              id="question"
              register={register('question')}
              errors={errors.question}
              placeholder="Ваш вопрос"
              type="textarea"
              inputStyle={StyledTextArea}
            />

            <FormGroup>
              <Typography variant="bodyS" as="label">
                Группы
              </Typography>
              <Controller
                name="group"
                control={control}
                render={({ field: { onChange, value, onBlur } }) => (
                  <DropdownNestedCheckboxes
                    data={GROUP_DATA}
                    onSelectionChange={onChange}
                    value={value}
                    onBlur={onBlur}
                  />
                )}
              />
              {errors.group && <ErrorMessage>{errors.group.message}</ErrorMessage>}
            </FormGroup>

            <CheckboxGroup>
              <WrapperPrivacyPolicy>
                <Checkbox
                  id="privacyPolicy"
                  type="checkbox"
                  {...register('privacyPolicy')}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      e.currentTarget.click();
                    }
                  }}
                />
                <Label htmlFor="privacyPolicy">Согласен с политикой обработки данных</Label>
              </WrapperPrivacyPolicy>
              {errors.privacyPolicy && <ErrorMessage>{errors.privacyPolicy.message}</ErrorMessage>}
            </CheckboxGroup>
            <WrapperButtonForm>
              <Button width="141px" height="48px" customStyles={BtnStl}>
                Отправить
              </Button>
            </WrapperButtonForm>
          </Form>
        </FormWrapper>
      </AppWrapper>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default RequestSection;

const AppWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 0px 80px 0px;
  font-family: ${({ theme }) => theme.fonts.primary};

  @media (max-width: 850px) {
    padding: 0px 16px 48px 16px;
  }
`;

const ImgWrapper = styled.div`
  background: url('/src/assets/kristine-wook-ZyxNWi3JCto-unsplash 1.jpg') no-repeat center center/cover;
  height: 500px;
  width: 100%;
  top: 0;
  position: absolute;
  @media (max-width: 1000px) {
    height: 279px;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  margin-top: 250px;

  gap: 48px;
  flex-direction: column;
  padding: 48px;
  border-radius: 8px;
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.White};
  border: 1px solid ${({ theme }) => theme.colors.coolGray20};

  @media (max-width: 1000px) {
    margin-top: 150px;
  }

  @media (max-width: 850px) {
    width: 100%;
  }
  @media (max-width: 700px) {
    padding: 24px 16px 16px 16px;
    gap: 32px;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled(Typography)`
  @media (max-width: 700px) {
    ${({ theme }) => theme.typography.h3}
  }
`;

const SubTitle = styled(Typography)`
  @media (max-width: 700px) {
    ${({ theme }) => theme.typography.bodyM}
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 616px;
  gap: 16px;

  @media (max-width: 850px) {
    width: 100%;
  }
`;

const UsernameSecondName = styled.div`
  display: flex;
  gap: 16px;
`;

const StyledTextArea = css`
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  @media (max-width: 850px) {
    min-height: 48px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
`;
const WrapperPrivacyPolicy = styled.div`
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  min-width: 0;
  width: 20px;
  height: 20px;
  margin: 9px;
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.Primary60};
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.Primary60};
  }
`;

const Label = styled.label`
  ${({ theme }) => theme.typography.bodyS}
`;

const WrapperButtonForm = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const BtnStl = css`
  ${({ theme }) => theme.typography.buttonM}
`;

const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.Error};
  font-size: 12px;
  margin-top: 5px;
`;
