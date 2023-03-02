import Filme from '../Filme'
import './Genero.css'
import hexToRgba from 'hex-to-rgba';


const Genero = ( { genero, filmes, aoDeletar, mudarCor } ) => {

    return (
        
        (filmes.length > 0) ? <section className='genero' style={{backgroundColor: hexToRgba(genero.cor, '0.3')}}>
            
            <input onChange={e => mudarCor(e.target.value, genero.id)} value={genero.cor} type={'color'} className='input_cor'/>
            <h3 style={{ borderColor: genero.cor }}>{genero.nome}</h3>
            <div className='filmes'>
                {filmes.map((filme) => {
                return <Filme corFundo={genero.cor} filme={filme} key={filme.nome} nome={filme.nome} descricao={filme.descricao} imagem={filme.imagem} aoDeletar={aoDeletar}/>})}
            </div>
        </section>
        : ''
    )
}

export default Genero