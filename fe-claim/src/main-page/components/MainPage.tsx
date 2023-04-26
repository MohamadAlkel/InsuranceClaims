import { useSearchParams } from 'react-router-dom';
import React, { FC, ReactElement } from 'react';
import SubmitClaim from './SubmitClaim';
import { Claims } from './Claims';
import { MainPageProps } from '../helper/typeHelper';
import Popup from '../../ui/popup/Popup';

const MainPage: FC<MainPageProps> = ({
  showHome,
  submitClaim,
}: MainPageProps): ReactElement<void> => {
  const [searchParams] = useSearchParams();
  const isAdmin = searchParams.get('admin') === 'true';
  const [showPopup, setShowPopup] = React.useState(isAdmin);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <Popup
        text="Welcome to Tigerlab!"
        showPopup={showPopup}
        handleClosePopup={handleClosePopup}
      />
      {showHome && <Claims />}
      {submitClaim && <SubmitClaim />}
    </>
  );
};

export default MainPage;
