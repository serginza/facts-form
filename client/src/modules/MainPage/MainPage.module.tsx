import { lazy, memo, Suspense } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { FACTS_DATA } from 'shared/constants';
import { DotsLoader } from 'shared/ui';
import {
  factsDataContainerStyles,
  MainPageContentWrapper,
  StyledSection,
} from './MainPage.styles';
import { ContactUsButton } from 'shared/components';

function MainPageModuleProto() {
  const YouTube = lazy(() => import('react-youtube'));

  return (
    <MainPageContentWrapper>
      <StyledSection backgroundColor="var(--soft-indigo-10)" height="400px">
        <Stack
          p={'0 0 40px'}
          maxWidth={'1280px'}
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'space-between'}
          alignItems={'flex-start'}
          gap={'64px'}
        >
          <Box
            style={{ width: '100%', maxWidth: '500px', marginLeft: '32px' }}
            aria-labelledby="fact heading"
          >
            <Typography variant="h1" margin="32px 0">
              FACTS <br /> ARE THE FOUNDATION <br /> OF SCIENCE
            </Typography>
            <Typography variant="h5" textAlign="justify">
              Facts are things that can be tested and verified. They are
              independent of how we perceive them or what we think. Facts can be
              about anything: nature, events, people, or objects. They are the
              building blocks of knowledge.
            </Typography>
          </Box>
          <Box
            style={{
              width: '530px',
              height: '320px',
              position: 'relative',
              margin: '24px 32px 0 0',
            }}
            aria-labelledby="facts video"
          >
            <Suspense fallback={<DotsLoader />}>
              <YouTube
                videoId="vjRJHhuAnYY"
                opts={{ width: '530px', height: '320px' }}
                alt="facts video"
                // TODO: сделать резиновый плеер youtube
                // opts={{
                //   width: '100%',
                //   maxWidth: '530px',
                //   height: '100%',
                //   maxHeight: '320px',
                // }}
              />
            </Suspense>
          </Box>
        </Stack>
      </StyledSection>
      <StyledSection backgroundColor="rgba(255, 205, 149, 60)">
        <Stack
          p="0 0 40px"
          maxWidth={'1280px'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          gap={'24px'}
        >
          <Typography
            variant="h2"
            m="32px"
            letterSpacing={1.3}
            aria-labelledby="facts subheading"
          >
            FACTS FROM THE WORLD
          </Typography>
          <Box
            aria-labelledby="facts overstatement"
            sx={factsDataContainerStyles}
          >
            {FACTS_DATA.map((fact) => (
              <Box sx={{ margin: '0 32px 32px' }} key={fact.title}>
                <Typography fontWeight={600}>{fact.title}</Typography>
                <Typography variant="body2" textAlign="justify">
                  {fact.description}
                </Typography>
              </Box>
            ))}
          </Box>
          <ContactUsButton aria-label="contact us" />
        </Stack>
      </StyledSection>
      <StyledSection height="250px">
        <Stack
          maxWidth={'1280px'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          gap={'24px'}
        >
          <Typography
            variant="h3"
            letterSpacing={1.3}
            m="32px"
            aria-labelledby="more facts heading"
          >
            DO YOU WANT MORE FACTS?
          </Typography>
          <ContactUsButton aria-label="contact us" />
        </Stack>
      </StyledSection>
    </MainPageContentWrapper>
  );
}

export const MainPageModule = memo(MainPageModuleProto);
