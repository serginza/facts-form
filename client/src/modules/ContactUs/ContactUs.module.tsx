import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { observer } from 'mobx-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { ButtonElement, DotsLoader, TextFieldElement } from 'shared/ui';
import { ContactUsStore } from './ContactUs.store';
import { FieldsetWrapper, responseMessageStyles } from './ContactUs.styles';
import { userInfoSchema } from './ContactUs.schema';
import type { UserInfoEntity } from 'entities/ContactUs';
import { Stack, Typography } from '@mui/material';

function ContactUsModuleProto() {
  const { isLoading, sendUserInfo, responseMessage } = ContactUsStore;

  const methods = useForm<UserInfoEntity>({
    mode: 'all',
    resolver: zodResolver(userInfoSchema),
  });

  const { control, handleSubmit, formState } = methods;

  const onSubmit = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      handleSubmit((data) => {
        console.log('userInfo', data);
        sendUserInfo(data);
      })();
    },
    [handleSubmit, sendUserInfo]
  );

  if (isLoading) {
    return <DotsLoader />;
  }

  if (responseMessage) {
    return (
      <Stack width={'100%'} height={'50vw'}>
        <Typography variant="h1" sx={responseMessageStyles}>
          {responseMessage}
        </Typography>
      </Stack>
    );
  }

  return (
    <form aria-labelledby="contact us form">
      <FieldsetWrapper>
        <Typography variant="h2" m="20px auto" aria-labelledby="form title">
          Fill out the feedback form
        </Typography>
        <TextFieldElement
          name="name"
          label="Name"
          aria-labelledby="name"
          control={control}
          fullWidth
        />
        <TextFieldElement
          name="email"
          label="Email"
          aria-labelledby="email"
          control={control}
          fullWidth
        />
        <TextFieldElement
          name="message"
          label="Message"
          aria-labelledby="message"
          control={control}
          multiline
          rows={4}
          fullWidth
        />
        <ButtonElement
          type="submit"
          onClick={onSubmit}
          disabled={!formState.isValid}
          aria-labelledby="submit button"
        >
          Submit
        </ButtonElement>
      </FieldsetWrapper>
    </form>
  );
}

export const ContactUsModule = observer(ContactUsModuleProto);
