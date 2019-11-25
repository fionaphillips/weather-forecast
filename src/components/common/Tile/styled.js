import styled from 'styled-components';

const StyledTile = styled.div`
  align-items: center;
  border: solid #c2c5cc 2px;
  border-radius: 15px;
  display: inline-flex;
  flex-direction: column;
  height: 350px;
  justify-content: space-between;
  margin: 20px;
  width: 250px;

  .max,
  .min {
    display: inline-block;
  }
`;

export default StyledTile;
