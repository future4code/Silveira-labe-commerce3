import React from "react";
import styled from "styled-components";
import facebook from "../../Imagens/facebook.png"
import twitter from "../../Imagens/twitter.png"
import instagram from "../../Imagens/instagram1.png"

const ContainerFooter = styled.div`
    display: flex;
    width: 100%;
    background-image: linear-gradient(to top, #f43b47 0%, #453a94 100%);
    box-shadow: 0px 2px 15px rgba(255,255,255,0.7);
    justify-content: space-around;
    align-items: center;
    height: 100px;

    p {
        color: white;
        font-size: 18px;
    }
`
const RedesSociais = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const ImagemIcones = styled.div`
        display: flex;
        width: 207px;
        justify-content: space-around;
        margin-bottom: 10px;
        img {
            width: 30px;
            }
`

const DireitosReservados = styled.div`
    
    p {
        color: white;
        font-size: 14px;
        justify-content: center;
    }
`

class Footer extends React.Component {
    render() {
        return (
            <ContainerFooter>
                <p> 👕 Space Shirt - Você vestindo o mundo! 👚 </p>

                <DireitosReservados>
                <p> Copyright © 2010-2022 Space Shirt Company. Todos os direitos reservados. </p>
                </DireitosReservados>

                <RedesSociais>
                    <ImagemIcones>
                        <a href="https://www.instagram.com/" target="_blank"><img src={instagram} alt="Ícone Instagram" /></a>
                        <a href="https://www.twitter.com/" target="_blank"><img src={twitter} alt="Ícone Twitter" /></a>
                        <a href="https://www.facebook.com/" target="_blank"><img src={facebook} alt="Ícone Facebook" /></a>
                    </ImagemIcones>
                </RedesSociais>
            </ContainerFooter>
        );
    }
}

export default Footer

