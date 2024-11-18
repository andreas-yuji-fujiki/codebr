import { useState } from "react";
import styled from "styled-components";

export function CreationSteps() {
    const cardTitles = [
        { title: "Codificação", src: "codeStep.png", alt: "Imagem de Codificação" },
        { title: "Tabelas", src: "tablesStep.png", alt: "Imagem de Tabelas" },
        { title: "Compartilhe!", src: "shareStep.png", alt: "Imagem de Compartilhamento" },
    ];

    const [selectedItem, setSelectedItem] = useState(null);
    const [currentImage, setCurrentImage] = useState({ src: "", alt: "" });

    const handleClick = (item) => {
        setSelectedItem(item.title); // Usa o título para comparar
        setCurrentImage({ src: item.src, alt: item.alt });
    };

    return (
        <StepsWrapper>
            {/* Renderizando os títulos */}
            <ul id="titlesWrapper">
                {cardTitles.map((item, index) => (
                    <li
                        key={index}
                        className={selectedItem === item.title ? "selected" : ""}
                        onClick={() => handleClick(item)}
                    >
                        {item.title}
                        <div className="icon"></div>
                    </li>
                ))}
            </ul>

            {/* Renderizando a imagem */}
            <div id="imagesWrapper">
                {currentImage.src && (
                    <img src={currentImage.src} alt={currentImage.alt} />
                )}
            </div>
        </StepsWrapper>
    );
}

const StepsWrapper = styled.div`
    color: #fff;
    background-color: #161616;
    width: 90%;
    margin: 0 auto;

    #titlesWrapper {
        list-style: none;
        display: flex;
        justify-content: space-between;
    }

    li {
        z-index: 1;
        height: 60px;
        
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
        
        text-transform: uppercase;
        letter-spacing: 4px;
        background-color: #000;

        &:hover {
            cursor: pointer;
            transition: color 0.3s;
            color: #aaa;
        }
    }

    li.selected {
        flex-direction: column;

        font-weight: 900;
        color: #007bff;
        border: 1px solid #007bff;
    }

    li.selected .icon{
        position: absolute;
        margin-top: 60px;
        z-index: -1;

        min-width: 40px;
        min-height: 40px;

        background-color: #000;
        border-right: 1px solid #007bff;
        border-bottom: 1px solid #007bff;

        transform: rotate(45deg);
    }

    img{
        width: 100%;
        min-height: 400px;
        height: auto;
        display: block;
    }

    @media (max-width: 1520px){
        width: 97%;
    }
`
