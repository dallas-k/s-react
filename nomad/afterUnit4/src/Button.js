import propType from "prop-types"
import style from './Button.module.css'

function Button({text}){
    return (
        <button className={style.btn}>{text}</button>
    )
}

Button.propTypes = {
    text : propType.string.isRequired
}

export default Button