import styled from "styled-components";

export const DomainBannerLabel = () => {
  return (
    <StyledWrapper>
      <div className="brutalist-container">
        <input
          placeholder="seuprojeto.code.com.br"
          className="brutalist-input smooth-type"
          type="text"
        />
        <label className="brutalist-label">domínio code.com.br grátis!</label>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
    .brutalist-container {
      position: absolute;
      z-index: 1;
      margin-top: -40px;
      right: 7%;

      pointer-events: none;
      opacity: 1;
      z-index: 1;
      width: 250px;
      font-family: monospace;
  }

  .brutalist-input {
    width: 100%;
    padding: 10px 15px;
    font-size: 18.6px;
    font-weight: bold;
    color: #000;
    background-color: #fff;
    border: 4px solid #000;
    position: relative;
    overflow: hidden;
    border-radius: 0;
    outline: none;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    box-shadow: 5px 5px 0 #000, 10px 10px 0 #007bff;
  }

  .brutalist-label {
    position: absolute;
    left: -3px;
    top: -30px;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    background-color: #000;
    padding: 5px 10px;
    transform: rotate(-1deg);
    z-index: 1;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  // responsivity
  @media (max-width: 1145px){
    .brutalist-container{
      right: 43px;
    }
    .brutalist-input{
      font-size: 15px;
      width: 85%;
      padding: 10px;
    }
    .brutalist-label{
      font-size: 12px;
      top: -27px;
    }
  }
  @media (max-width: 1145px){
    .brutalist-container{
      right: 3%;
    }
  }
  @media (max-width: 768px){
    .brutalist-container{
      display: none;
    }
  }
`;
