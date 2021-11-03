import React, { useState } from "react";
import * as S from './styled';
import { Header } from '../components/header'
import Address from "../components/address";
import Button from "../components/button";
import InputSearch from "../components/input";
import api from '../service/api';

const Home = () => {
    const [cep, setCep] = useState('');
    const [cepInformado, setCepInformado] = useState('');

    const handleBuscaCEP = () => {
        api
            .get(`/${cepInformado.replace('-', '')}/json`)
            .then((response) => setCep(response.data))
            .catch((err) => console.log('Falha: ' + err))
    }

    return(
        <S.MainDiv>
            <Header text="Busca CEP" subText="(https://viacep.com.br/)" />
            <S.Search>
                <InputSearch onChange={(event) => setCepInformado(event.target.value)} />
                <Button text="Pesquisar" onClick={handleBuscaCEP}/>
            </S.Search>
            <Address cep={cep} />
        </S.MainDiv>
    )
}

export default Home;