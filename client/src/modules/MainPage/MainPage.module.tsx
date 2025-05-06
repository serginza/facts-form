import { lazy, memo, Suspense } from 'react';
import { YouTubePlayer } from 'react-youtube';
import { Box, Stack, Typography } from '@mui/material';
import { FACTS_DATA } from 'shared/constants';
import { DotsLoader } from 'shared/ui';
import { MainPageContentWrapper, StyledSection } from './MainPage.styles';
import { ContactUsButton } from 'shared/components';

function MainPageModuleProto() {
  //@ts-expect-error //as Promise<{ default: React.ComponentType<any> }>);
  const YouTube = lazy(() => import('react-youtube'));

  return (
    <MainPageContentWrapper>
      <StyledSection
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="space-between"
        backgroundColor="var(--soft-indigo-10)"
        height="400px"
        gap="32px"
      >
        <Stack spacing={3}>
          <div style={{ maxWidth: '600px' }}>
            <Typography variant="h1" marginTop="32px">
              Facts are the foundation of science
            </Typography>
            <Typography variant="h5">
              Facts are things that can be tested and verified. They are
              independent of how we perceive them or what we think. Facts can be
              about anything: nature, events, people, or objects. They are the
              building blocks of knowledge.
            </Typography>
          </div>
          <div
            style={{
              width: '530px',
              height: '320px',
              position: 'relative',
              marginTop: '24px',
            }}
          >
            <Suspense fallback={<DotsLoader />}>
              <YouTube
                videoId="dQw4w9WgXcQ"
                opts={{ width: '530px', height: '320px' }}
              />
            </Suspense>
          </div>
        </Stack>
      </StyledSection>
      <StyledSection padding="0 0 40px">
        <Typography variant="h2" m="32px auto">
          Facts from the world
        </Typography>
        <Box display="grid" gridTemplateColumns="repeat(3, 1fr)">
          {FACTS_DATA.map((fact) => (
            <Box sx={{ margin: '0 32px 32px' }} key={fact.title}>
              <Typography fontWeight={600}>{fact.title}</Typography>
              <Typography variant="body2" textAlign="justify">
                {fact.description}
              </Typography>
            </Box>
          ))}
        </Box>
        <ContactUsButton />
      </StyledSection>
      <StyledSection
        height="250px"
        gap="24px"
        backgroundColor="var(--soft-indigo-10)"
      >
        <Typography variant="h3">Do you want more facts?</Typography>
        <ContactUsButton />
      </StyledSection>
    </MainPageContentWrapper>
  );
}

export const MainPageModule = memo(MainPageModuleProto);
