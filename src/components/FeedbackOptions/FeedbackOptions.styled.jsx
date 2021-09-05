import styled from '@emotion/styled';

const Button = styled.button`
  margin-left: 10px;
  padding: 2px 6px;
  border: none;
  border-radius: 5px;
  border: 0.2px solid #dedddd;
  cursor: pointer;
  transition: box-shadow 250ms linear;

  &:hover {
    -webkit-box-shadow: 0px 1px 5px 1px rgba(34, 60, 80, 0.92);
    -moz-box-shadow: 0px 1px 5px 1px rgba(34, 60, 80, 0.92);
    box-shadow: 0px 1px 5px 1px rgba(34, 60, 80, 0.92);
  }

  &:active {
    color: #fff;
    background-color: #3a6edd;
  }
`;

export { Button };
