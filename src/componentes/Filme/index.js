import './Filme.css'

const Filme = ({ nome, imagem, descricao, corFundo }) => {
    return (
        <div className='filme'>
            <div style={ {backgroundColor: corFundo} } className='cabecalho'>
                <img src={imagem} alt='Eduardo Santos'/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{descricao}</h5>
            </div>
        </div>
    )
}

export default Filme