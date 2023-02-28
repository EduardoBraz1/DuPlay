import Filme from '../Filme'
import './Genero.css'

const Genero = (props) => {
    const css = { backgroundColor: props.corFundo }

    return (
        (props.filmes.length > 0) ? <section className='genero' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='filmes'>
                {props.filmes.map(filme => <Filme corFundo={props.corPrimaria} key={filme.nome} nome={filme.nome} descricao={filme.descricao} imagem={filme.imagem}/> )}
            </div>
        </section>
        : ''
    )
}

export default Genero