import styled from 'styled-components';

const TagStyled = styled.div`
  color: ${props => props.textColor};
  background-color: ${props => props.background};
  padding: 5px 10px;
  border-width: 1px;
  border-radius: 4px;
  font-size: 12px;
  margin-bottom: 1px;
`;

export default TagStyled;
