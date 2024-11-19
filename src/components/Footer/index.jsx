import { ContainerMain } from "./styles"
import { github, linkedin, gmail } from "../../assets/zimages"

function Footer() {

    return (
        <ContainerMain>
        
                <h3>© 2024 Danilo Monção de Araujo. Todos os direitos reservados.</h3>
            

            <article>
                <a href=""> <img src={linkedin} /> </a>
                <a href=""> <img src={github} /> </a>
                <a href=""> <img src={gmail} /> </a>
            </article>
        </ContainerMain>
    )
}

export default Footer