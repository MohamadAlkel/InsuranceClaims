import React, { FC, ReactElement } from 'react';
import MainPage from '../../main-page';
import NavBar from './NavBar';

const MainPageRoute: FC<any> = (props): ReactElement<void> => {
  return (
    <>
      <NavBar />
      <MainPage {...props} />
    </>
  );
};

export default MainPageRoute;
