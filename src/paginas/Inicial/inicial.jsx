import { Link } from "react-router-dom"
import styled from "styled-components"
import cavaloSemCara from './assets/cavaloSemCara.png'

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: "Playwrite DK Loopet", cursive;
`
const DivImagem = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    
    h1{
        font-weight: 700;
        font-size: 32px;
        margin-bottom: 16px;
        text-align: center;
        color: white;
        background: rgb(65,226,103);
        background: radial-gradient(circle, rgba(65,226,103,1) 0%, rgba(16,150,29,1) 67%);
        padding: 1rem;
        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    }
    img{
        width: 100%;
        border-radius: 16px;
        padding: 1rem;
    }
`
const DivAlternativas = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
    margin-top: 16px;
`
const LinkEstilizado = styled(Link)`
    padding: 10px 20px;
    border-radius: 12px;
    text-decoration: none;
    background: rgb(65,226,103);
    background: radial-gradient(circle, rgba(65,226,103,1) 0%, rgba(16,150,29,1) 67%);
    color: white;
    font-size: 16px;
    &:hover{
        background: #48b953;
    }
`

export default function Inicial() {
    return (
        <Div>
            <DivImagem>
                <h1>Acerte o animal e ganhe um beijo!!!</h1>
                <img src={cavaloSemCara} />
            </DivImagem>
            <DivAlternativas>
                <LinkEstilizado to='/cavalo'>Cavalo</LinkEstilizado>
                <LinkEstilizado to='/rinoceronte'>Rinoceronte</LinkEstilizado>
                <LinkEstilizado to='/pato'>Pato</LinkEstilizado>
                <LinkEstilizado to='/cachorro'>Cachorro</LinkEstilizado>
            </DivAlternativas>
        </Div>
    )
}