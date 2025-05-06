import { Link } from '@mui/material';
import { memo } from 'react';
import { PATH_LIST } from 'shared/constants';
import { ButtonElement } from 'shared/ui';

function ContactUsButtonProto() {
  return (
    <Link href={PATH_LIST.CONTACT_US}>
      <ButtonElement variant="contained">Contact us</ButtonElement>
    </Link>
  );
}

export const ContactUsButton = memo(ContactUsButtonProto);
