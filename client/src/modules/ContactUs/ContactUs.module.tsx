import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { observer } from 'mobx-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { ButtonElement, DotsLoader, TextFieldElement } from 'shared/ui';
import { ContactUsStore } from './ContactUs.store';
import { FieldsetWrapper } from './ContactUs.styles';
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

  const onSubmit = useCallback(() => {
    handleSubmit((data) => {
      console.log('userInfo', data);
      sendUserInfo(data);
    })();
  }, [handleSubmit, sendUserInfo]);

  return isLoading ? (
    <DotsLoader />
  ) : responseMessage ? (
    <Stack width={'100%'} height={'50vw'}>
      <Typography variant="h1" m="auto" p="0 20px">
        {responseMessage}
      </Typography>
    </Stack>
  ) : (
    <form aria-labelledby="contact us form">
      <FieldsetWrapper>
        <h1 aria-labelledby="form title">Fill out the feedback form</h1>
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
