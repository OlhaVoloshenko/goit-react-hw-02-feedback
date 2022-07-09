import styled from '@emotion/styled';

export const Options = styled.button`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.25;

  margin: 12px 8px;
  text-transform: uppercase;

  background-color: antiquewhite;
  border-radius: 4px;
  width: 80px;

  :hover,
  :focus {
    background-color: orange;
    border-radius: 4px;
    border-color: orange;
    color: white;

    cursor: pointer;
  }
`;
