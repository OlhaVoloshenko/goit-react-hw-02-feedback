import styled from '@emotion/styled';

export const Options = styled.button`
  font-weight: 700;
  font-size: 12px;
  line-height: 1.25;

  margin: 12px 8px;
  padding: 12px 8px;
  text-transform: uppercase;

  background-color: antiquewhite;
  border-radius: 4px;
  width: 80px;
  border: 1px solid grey;

  :hover,
  :focus {
    background-color: orange;
    border-radius: 4px;
    border-color: orange;
    color: white;

    cursor: pointer;
  }
`;
