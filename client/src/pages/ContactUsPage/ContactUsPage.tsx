import { memo } from 'react';
import { ContactUsModule } from 'modules/ContactUs';

function ContactUsPageProto() {
  return <ContactUsModule />;
}

const ContactUsPage = memo(ContactUsPageProto);

export default ContactUsPage;
