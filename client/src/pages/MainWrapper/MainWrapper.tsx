import { memo } from 'react';
import { MainWrapperModule } from 'modules/MainWrapper';

function MainWrapperProto() {
  return <MainWrapperModule />;
}

const MainWrapper = memo(MainWrapperProto);

export default MainWrapper;
