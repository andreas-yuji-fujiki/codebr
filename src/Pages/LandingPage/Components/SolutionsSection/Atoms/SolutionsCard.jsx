export const SolutionsCard = ( { title, cardItems, className } ) => {
    return (
      <StyledWrapper>
        <div className={`container ${className}`}>
          {/* hover effect boxes */}
            <div className="hover-area hover-area-1" />
            <div className="hover-area hover-area-2" />
            <div className="hover-area hover-area-3" />
            <div className="hover-area hover-area-4" />

          {/* card */}
          <div className='card'>
            {/* card header */}
            <div className="card-header">
                {title}
            </div>

            {/* card info */}
            <div className="cardInfo">
                <ul className="cardItems">
                    {cardItems.map((item, index) => (
                        // rendering card items
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
          </div>
        </div>
      </StyledWrapper>
    );
  };
  
  // styled components
  import styled from "styled-components";

  const StyledWrapper = styled.div`
    // default behaviors
    width: 49%;
    min-height: 400px;
    margin-top: 5.3%;

    // general styles
    .container {
      perspective: 1000px;
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: stretch;
    }
    .card {
      background-color: #1a1a1c;
      border: 1px solid black;
      position: relative;
      z-index: 0;
      transition: all 300ms ease-out;
      transform-origin: center center;
      width: 100%;
      height: 100%;
      box-shadow: 0px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  // programmers card
    .programmers-card .card{
      transform: rotateX(2.5deg) rotateY(2.5deg) translateZ(0);
      transform-origin: left bottom;
      box-shadow: -10px 10px #007bff; /* sombra azul */
    }
  // beginners card
    .beginners-card .card{
      transform-origin: right top;
      transform: rotateX(-2.5deg) rotateY(-2.5deg) translateZ(0);
      box-shadow: 10px -10px #007bff; /* blue shadow */
    }
    
    .card-header {
      display: flex;
      align-items: center;
      gap: 13px;

      padding: 25px 30px;

      color: #fff;
      font-size: 23px;
      letter-spacing: 7px;
      text-transform: uppercase;

      background-color: #000;
    }

    // card list items & button
    .cardInfo{
        height: 100%;

        display: flex;
        align-items: flex-start;

        background-color: #161616;
    }
    .cardItems{
        list-style: none;
        width: 100%;
        padding: 30px;
        opacity: 0.85;

        display: flex;
        flex-direction: column;
        gap: 40px;
        line-height: 35px;

        font-size: 21px;
    }
    .cardItems li::before{
        content: '';

        width: 22px;
        height: 22px;
        
        display: inline-block;
        margin-right: 12px;
        margin-bottom: -3px;

        border-radius: 100%;
        background-image: url('checked.png');
        background-size: cover;
    }
  
    /* hover effects */

  // programmers card particularity
    .programmers-card .hover-area-2:hover ~ .card{
        transform: rotateX(0deg) rotateY(0deg);
    }
  // begginers card particularity
    .beginners-card .hover-area-4:hover ~ .card{
      transform: rotateX(0deg) rotateY(0deg);
    }

    .hover-area {
        opacity: 0;
        position: absolute;
        z-index: 1;
        width: 50%;
        height: 50%;
    }

    .hover-area:hover ~ .card,
    .hover-area:focus ~ .card {
        transform: translateZ(0);
    }
    .hover-area-1 {
        top: 0;
        left: 0;
    }
    .hover-area-1:hover ~ .card {
        transform: rotateX(2.5deg) rotateY(-2.5deg) translateZ(0);
        transform-origin: right bottom;
        box-shadow: 10px 10px #007bff; /* sombra azul */
    }
    .hover-area-2 {
        top: 0;
        right: 0;
    }
    .hover-area-2:hover ~ .card {
        transform: rotateX(2.5deg) rotateY(2.5deg) translateZ(0);
        transform-origin: left bottom;
        box-shadow: -10px 10px #007bff; /* sombra azul */
    }
    .hover-area-3 {
        bottom: 0;
        right: 0;
    }
    .hover-area-3:hover ~ .card {
        transform-origin: left top;
        transform: rotateX(-2.5deg) rotateY(2.5deg) translateZ(0);
        box-shadow: -10px -10px #007bff; /* sombra azul */
    }
    .hover-area-4 {
        bottom: 0;
        left: 0;
    }
    .hover-area-4:hover ~ .card {
        transform-origin: right top;
        transform: rotateX(-2.5deg) rotateY(-2.5deg) translateZ(0);
        box-shadow: 10px -10px #007bff; /* blue shadow */
    }

    // responsivity
    @media (max-width: 1520px){
      width: 100%;
    }
    @media (max-width: 768px) {
      width: 95%;

      .hover-area{
        pointer-events: none;
      }

      .cardItems{
        padding: 30px 20px 30px 30px;
      }

      .programmers-card .card,
      .beginners-card .card{
        transform: rotateX(0) rotateY(0) translateZ(0);
        transform-origin: left bottom;
        box-shadow: 0px -8px #007bff; /* sombra azul */
      }
    }
`;
  