import { ContainerMain } from "./styles"
import { github, linkedin, gmail } from "../../assets/zimages"

function Footer() {

    return (
        <ContainerMain>
        
                <h3>© 2024 Danilo Monção de Araujo. Todos os direitos reservados.</h3>
            

            <article>
                <a href="https://www.linkedin.com/in/danilo-mon%C3%A7%C3%A3o-de-araujo/"> <img src={linkedin} /> </a>
                <a href="https://github.com/DaniloMoncaodeAraujo"> <img src={github} /> </a>
                <a href="mailto:danilomoncaoaraujo@gmail.com"> <img src={gmail} /> </a>
            </article>
        </ContainerMain>
    )
}

export default Footer