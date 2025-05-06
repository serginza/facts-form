import { memo } from 'react';
import { MainPageModule } from 'modules/MainPage';

function MainPageProto() {
  return <MainPageModule />;
}

const MainPage = memo(MainPageProto);

export default MainPage;
