import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Footer';
import Genero from './componentes/Genero';

function App() {

  const generos = [
    {
      nome: 'Ação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Aventura',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Comédia',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Terror',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Drama',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
      },
    {
      nome: 'Romance',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Documentário',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  const [filmes, setFilmes] = useState([])

  const aoNovoFilmeAdicionado = (filme) => {
    setFilmes([...filmes, filme])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario generos={generos.map(genero => genero.nome)} aoFilmeCadastrado={filme => aoNovoFilmeAdicionado(filme)}/>
      {generos.map(genero => <Genero 
        key={genero.nome} 
        nome={genero.nome} 
        corPrimaria={genero.corPrimaria} 
        corFundo={genero.corSecundaria}
        filmes={filmes.filter(filme => filme.genero === genero.nome)}
        />)}
      <Rodape />
    </div>
  );
}

export default App;
