import React from "react";
import * as S from './styled';

interface TextTitle{
    text: string;
    subText: string
}

export const Header = ({text, subText}:TextTitle) => {
    return (
        <S.MainHeader>
            <S.MainTitle> {text} </S.MainTitle>
            <S.SubTitle> {subText} </S.SubTitle>
        </S.MainHeader>
    )
}