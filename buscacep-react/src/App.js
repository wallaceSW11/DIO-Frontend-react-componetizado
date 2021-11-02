import React, {useState} from "react";
import api from './services/api'


function App() {
  const [cep, setCep] = useState('');
  const [cepInformado, setCepInformado] = useState('');

  const handleBuscarCep = () => {
    api
      .get(`/${cepInformado}/json`)
      .then((reponse) => setCep(reponse.data))
      .catch((err) => {
        console.log('deu ruim' + err);
      })

  }



  return (
    <div className="App">
      <h1>Busca CEP (viacep):</h1>
      <input type="text" placeholder="Digite o CEP sem hífen" valeu={cepInformado} onChange={(e) => setCepInformado(e.target.value)}/>
      <button onClick={handleBuscarCep}>Buscar</button>
      {cep &&
      (<>
      <h2>{`Logradouro: ${cep.logradouro}`}</h2>
      <h2>{`Bairro: ${cep.bairro}`}</h2>
      <h2>{`Cidade: ${cep.localidade}`}</h2>
      <h2>{`UF: ${cep.uf}`}</h2>
      <h2>{`IBGE: ${cep.ibge}`}</h2>) </>)}
    </div>
  );
}

export default App;
