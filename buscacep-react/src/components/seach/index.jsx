import React from "react";
import Button from "../button";
import InputSearch from "../input";
import * as S from './styled'

const SearchPanel = () => {
    return (
        <S.SearchSection>
            <InputSearch placeholder="00000-000"/>
            <Button text="Pesquisar" />
        </S.SearchSection>
    )
}

export default SearchPanel;