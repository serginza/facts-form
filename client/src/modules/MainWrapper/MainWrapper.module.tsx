import { memo } from 'react';
import { Outlet } from 'react-router-dom';
import { PATH_LIST } from 'shared/constants';
import {
  MainContentWrapper,
  MainPageWrapper,
  StyledFooter,
  StyledHeader,
} from './MainWrapper.styles';
import { Typography } from '@mui/material';
import { ContactUsButton } from 'shared/components';

{
  /* <Stack
  width={'100%'}
  maxWidth={'1280px'}
  height={'100px'}
  display={'flex'}
  flexDirection={'row'}
  justifyContent={'space-between'}
  alignItems={'center'}
  m={'0 16px'}
>
  <Typography variant="h6">Facts Company</Typography>
  <nav>
    <ContactUsButton />
  </nav>
</Stack> */
}

function MainWrapperProto() {
  return (
    <MainPageWrapper>
      <StyledHeader>
        <Typography variant="h6">Facts Company</Typography>
        <nav>
          <ContactUsButton />
        </nav>
      </StyledHeader>
      <MainContentWrapper>
        <Outlet />
      </MainContentWrapper>
      <StyledFooter>
        <Typography variant="h6">Facts Company</Typography>
        <Typography variant="body2">by Serginza</Typography>
      </StyledFooter>
    </MainPageWrapper>
  );
}

export const MainWrapperModule = memo(MainWrapperProto);
