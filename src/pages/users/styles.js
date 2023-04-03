import styled from "styled-components";
import Background from '../../assets/background.svg'


export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100vh;
`;

export const Image = styled.img`
    margin-top: 30px;
`;

export const ContainerItens = styled.div`
   background: linear-gradient(157.44deg, 
    rgba(255, 255, 255, 0.6) 0.84%, 
    rgba(255, 255, 255, 0.6) 0.85%, 
    rgba(255, 255, 255, 0.15) 100%);
    backdrop-filter: blur(45px);
    border-radius: 61px 61px 0px 0px;
    padding: 50px 36px;
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

export const H1 = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 40px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 80px;
`;

export let Button = styled.button`
    width: 342px;
    height: 74px;
    margin-top: 130px;
    background: transparent;
    border-radius: 14px;
    border: 1px solid #ffffff;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 28px;
    color: #FFFFFF;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;

    img {
        transform: rotateY(180deg);
    }
    

&:hover{
    opacity: 0.8;
}
&:active{
    opacity: 0.5;
}
`;
export const User = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    width: 342px;
    height: 58px;
    border   : none;
    outline: none;
    padding-left: 25px;
    padding-right: 25px;
    font-style: normal;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 20px;

    p { 
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
}

    button {
        background: none;
        border: none;
        cursor: pointer;
    }
`;

