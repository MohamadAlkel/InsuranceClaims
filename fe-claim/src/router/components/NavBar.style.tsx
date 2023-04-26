import styled from 'styled-components';

export const NavBarWrapper = styled.nav`
  margin-bottom: 20px;

  ul {
    list-style-type: none;
    display: flex;
    justify-content: flex-start;
    gap: 40px;
    align-items: center;
    padding-left: 2rem;
    height: 60px;
    box-sizing: border-box;
    background-color: var(--secondary-color);

    a {
      text-decoration: none;
      color: var(--white);
      font-weight: 400;
      font-size: 18px;
      border-radius: 3px;
      padding: 5px 10px;
    }

    a.active {
      color: var(--secondary-color);
      background: var(--white);
      border-radius: 3px;
      padding: 5px 10px;
    }
  }
`;
