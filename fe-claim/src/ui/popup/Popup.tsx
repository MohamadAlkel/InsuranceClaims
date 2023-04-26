import * as React from 'react';
import styled from 'styled-components';

export const PopupWrapper = styled.div`
  display: flex;
  border-radius: 5px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1;
  height: 100vh;
  background: #00000040;
  align-items: center;
  justify-content: center;
  .popup {
    background: var(--white);
    padding: 10px;
    padding-top: 0;
    border-radius: 3px;
    width: 250px;
    min-height: 100px;

    p {
      text-align: center;
    }

    .close {
      text-align: end;
      font-size: 23px;
      margin-bottom: 20px;
      cursor: pointer;
      color: #37784c;
    }
  }
`;

export interface PopupProps {
  text: string;
  showPopup: boolean;
  handleClosePopup: () => void;
}

const Popup: React.FunctionComponent<PopupProps> = ({
  showPopup,
  handleClosePopup,
  text,
}: PopupProps): React.ReactElement<void> => {
  return (
    <>
      {showPopup && (
        <PopupWrapper onClick={handleClosePopup}>
          <div className="popup">
            <div className="popup-content">
              <p className="close">&times;</p>
              <p>{text}</p>
            </div>
          </div>
        </PopupWrapper>
      )}
    </>
  );
};
export default Popup;
