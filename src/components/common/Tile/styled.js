import styled from 'styled-components';

const StyledTile = styled.div`
  align-items: center;
  border: solid #c2c5cc 2px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  height: 350px;
  justify-content: space-between;
  width: 250px;

  .max,
  .min {
    display: inline-block;
  }
`;

export default StyledTile;
