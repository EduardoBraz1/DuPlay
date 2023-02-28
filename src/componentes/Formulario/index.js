import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [imagem, setImagem] = useState('')
    const [genero, setGenero] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoFilmeCadastrado({
            nome,
            descricao,
            imagem,
            genero
        })
        setNome('')
        setDescricao('')
        setImagem('')
        setGenero('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do Filme.</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Filme" 
                    placeholder="Digite o nome do filme"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Descrição"
                    placeholder="Descreva o filme em uma palavra"
                    valor={descricao}
                    aoAlterado={valor => setDescricao(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                    />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Gênero"
                    itens={props.generos}
                    valor={genero}
                    aoAlterado={valor => setGenero(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario