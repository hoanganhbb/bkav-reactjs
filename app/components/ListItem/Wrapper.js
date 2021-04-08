import styled from 'styled-components';

const Wrapper = styled.div`
  width: 1220px;
  margin: 0 auto;
  &.grid {
    display: grid;
    grid-template-columns: 33.3333% 33.3333% 33.3333%;
  }
`;

export default Wrapper;
