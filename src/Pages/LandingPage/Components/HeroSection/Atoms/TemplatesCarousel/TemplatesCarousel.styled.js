import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: inline-flex;
  margin-top: 40px;
  height: 238px;

  align-items: flex-start;
  justify-content: center;

  overflow: hidden;
  padding: 0 34px;
`;

export const CarouselItem = styled.div`
  height: 200px;
  width: 250px;
  margin: 0 -40px;
  border-radius: 10px;
  color: #000;
  cursor: pointer;

  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  transition: transform 0.2s, z-index 0.2s, opacity 0.2s;
  
  span {
    color: #fff;
    align-self: flex-end;
    margin-bottom: -25px;
    opacity: 0.7;
  }

  &.active {
    transform: scale(1.1);
    z-index: 200;

    span {
      opacity: 0.83;
    }
  }

  &.hidden {
    opacity: 0;
    transform: translateY(-20px);
  }
`;
