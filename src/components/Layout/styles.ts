import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 71px 240px auto 0;
  grid-template-rows: 46px auto 52px;

  grid-template-areas: 'SL SN CI C' 'SL CL CD UL' 'SL UI CD UL';

  height: 100vh;
`;
