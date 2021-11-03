import React from "react";
import * as S from "./styled";
import { string } from 'prop-types'

const Button = ({text, onClick}) => {
    return <S.ButtonSeach onClick={onClick}>{text}</S.ButtonSeach>
}

Button.propTypes = {
    text: string
}

export default Button;