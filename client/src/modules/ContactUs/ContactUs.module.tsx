import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { observer } from 'mobx-react';
import { ButtonElement, TextFieldElement } from 'shared/ui';
import { ContactUsStore } from './ContactUs.store';
import { FieldsetWrapper } from './ContactUs.styles';

function ContactUsModuleProto() {
  const { isLoading, sendUserInfo } = ContactUsStore;

  //<UserInfoEntity>
  const methods = useForm({
    mode: 'all',
    // resolver: zodResolver(taskSchema),
  });

  const { control, handleSubmit, watch } = methods;

  console.log(watch());

  const onSubmit = useCallback(() => {
    handleSubmit((data) => {
      console.log('data', data);
      // @ts-expect-error TODO: Решить ошибку типизации control
      sendUserInfo(data);
    })();
  }, [handleSubmit, sendUserInfo]);

  return (
    <form>
      <FieldsetWrapper>
        <h1>Fill out the feedback form</h1>
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
        <ButtonElement onClick={onSubmit}>Submit</ButtonElement>
      </FieldsetWrapper>
    </form>
  );
}

export const ContactUsModule = observer(ContactUsModuleProto);
