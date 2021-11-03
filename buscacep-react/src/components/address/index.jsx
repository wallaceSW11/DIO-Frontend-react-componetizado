import React from 'react';
import * as S from './styled'

const Address = ({cep}) => {
    return (
        <S.Main>
            <S.AddressData>
                <span><strong>Logradouro: </strong>{cep.logradouro}</span>
                <span><strong>Bairro: </strong>{cep.bairro}</span>
                <span><strong>Cidade: </strong>{cep.cidade}</span>
                <span><strong>UF: </strong> {cep.uf}</span>
                <span><strong>IBGE: </strong> {cep.ibge}</span>
            </S.AddressData>
        </S.Main>
    )
}

export default Address;