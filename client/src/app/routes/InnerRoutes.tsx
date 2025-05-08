import { lazy, memo, type ReactElement, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PATH_LIST, ROOT } from 'shared/constants';
import { DotsLoader } from 'shared/ui';

const MainWrapper = lazy(
  () =>
    import(
      /* ChunkName: "pages/MainWrapper/MainWrapper" */ 'pages/MainWrapper/MainWrapper'
    )
);

const MainPage = lazy(
  () =>
    import(/* ChunkName: "pages/MainPage/MainPage" */ 'pages/MainPage/MainPage')
);

const ContactUsPage = lazy(
  () =>
    import(
      /* ChunkName: "pages/ContactUsPage/ContactUsPage" */ 'pages/ContactUsPage/ContactUsPage'
    )
);

function SuspenseWrapper(page: ReactElement) {
  return <Suspense fallback={<DotsLoader />}>{page}</Suspense>;
}

function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROOT} element={SuspenseWrapper(<MainWrapper />)}>
          <Route index element={SuspenseWrapper(<MainPage />)} />
          <Route
            path={PATH_LIST.CONTACT_US}
            element={SuspenseWrapper(<ContactUsPage />)}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export const InnerRoutes = memo(MainRoutes);
