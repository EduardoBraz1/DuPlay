import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Footer';
import Genero from './componentes/Genero';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [generos, setGeneros] = useState([
    {
      id: uuidv4(),
      nome: 'Ação',
      cor: '#D9F7E9'
    },
    {
      id: uuidv4(),
      nome: 'Aventura',
      cor: '#E8F8FF'
    },
    {
      id: uuidv4(),
      nome: 'Comédia',
      cor: '#F0F8E2'
    },
    {
      id: uuidv4(),
      nome: 'Terror',
      cor: '#FDE7E8'
    },
    {
      id: uuidv4(),
      nome: 'Drama',
      cor: '#FAE9F5'
      },
    {
      id: uuidv4(),
      nome: 'Romance',
      cor: '#FFF5D9'
    },
    {
      id: uuidv4(),
      nome: 'Documentário',
      cor: '#FFEEDF'
    }
  ])

  const [filmes, setFilmes] = useState([])

  const aoNovoFilmeAdicionado = (filme) => {
    setFilmes([...filmes, filme])
  }

  function deletarFilme (id) {
    setFilmes(filmes.filter(filme => filme.id !== id))
  }

  function mudarCorDoGenero(cor, id) {
    setGeneros(generos.map(genero => {
      if(genero.id === id) {
        genero.cor = cor;
      }
      return genero
    }))
  }

  function cadastrarGenero(novoGenero) {
    setGeneros([ ...generos, { ...novoGenero, id: uuidv4() } ])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
        cadastrarGenero={cadastrarGenero}
        id={generos.id} 
        aoDeletar={deletarFilme} 
        generos={generos.map(genero => genero.nome)} 
        aoFilmeCadastrado={filme => aoNovoFilmeAdicionado(filme)}
      />
      {generos.map((genero) =>
        <Genero
          mudarCor={mudarCorDoGenero}
          key={genero.nome}
          genero={genero}
          filmes={filmes.filter(filme => filme.genero === genero.nome)}
          aoDeletar={deletarFilme}
        />
      )}
      <Rodape />
    </div>
  );
}

export default App;
