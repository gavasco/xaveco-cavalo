import { Link } from "react-router-dom"
import styled from "styled-components"
import rinoceronte from './assets/rinoceronte.png'
import parabens from './assets/parabens.png'

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: "Playwrite DK Loopet", cursive;
`
const DivParabens = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(65,226,103);
    background: radial-gradient(circle, rgba(65,226,103,1) 0%, rgba(16,150,29,1) 67%);
    h1{
        font-weight: 700;
        font-size: 32px;
        margin-bottom: 16px;
        text-align: center;
        color: white;
        padding: 1rem 0;
        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    }
    img{
        width: 25%;
        padding: .5rem;
    }
`
const DivImagem = styled.div`
    img{
        width: 100%;
        padding: 1rem;
    }
`
const DivBotao = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 0 2rem;
    p{
        text-align: center;
    }
    span{
       color: rgba(184,9,9,1);
       font-weight: bold;
    }
`
const LinkEstilizado = styled(Link)`
    text-decoration: none;
    background: rgb(236,78,64);
    background: radial-gradient(circle, rgba(236,78,64,1) 0%, rgba(184,9,9,1) 67%);
    color: white;
    padding: 0.5rem;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    border-radius: 12px;
    margin-bottom: 8px;
`

export default function Rinoceronte() {
    return (
        <Div>
            <DivParabens>
                <img src={parabens} alt="" />
                <h1>Eeeeecha pega, acertou em cheio, PARABÉNS!!!</h1>
                <img src={parabens} alt="" />
            </DivParabens>
            <DivImagem>
                <img src={rinoceronte} alt="" />
            </DivImagem>
            <DivBotao>
                <LinkEstilizado to='/'>Tentar novamente</LinkEstilizado>
                <p>A cada nova tentativa será acrescentado <span>1 hora</span> ao seu prêmio</p>
            </DivBotao>
        </Div>
    )
}