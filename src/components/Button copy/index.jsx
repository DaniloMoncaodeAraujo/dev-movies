import { ButtonRed, ButtonWhite, } from "./styles.js"

function Button({ children }) {

    return (
        <>{ red ? ( <ButtonRed>{children}</ButtonRed>) : <ButtonWhite>{children}</ButtonWhite>}

        </>
    )
}
export default Button