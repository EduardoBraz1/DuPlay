import './Filme.css'

const Filme = ({filme, nome, imagem, descricao, corFundo, aoDeletar}) => {
    return (
        <div className='filme'>
            <div style={ {backgroundColor: corFundo} } className='cabecalho'>
                <img src={imagem} alt='Eduardo Santos'/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{descricao}</h5>
                <div className='favoritar'>
                    {filme.favorito ? 'favorito' : 'não favorito'}
                </div>
            </div>
        </div>
    )
}

export default Filme