import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import { MdDeleteForever } from "react-icons/md";

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [imagem, setImagem] = useState('')
    const [genero, setGenero] = useState('')
    const [nomeGenero, setNomeGenero] = useState('')
    const [corGenero, setCorGenero] = useState('')

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

    Campo.defaultProps={
        type: 'text'
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do Filme.</h2>
                <Campo 
                    obrigatorio={true} 
                    label="Filme" 
                    placeholder="Digite o nome do filme"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <Campo
                    obrigatorio={true}
                    label="Descrição"
                    placeholder="Descreva o filme em poucas palavras"
                    valor={descricao}
                    aoAlterado={valor => setDescricao(valor)}
                />
                <Campo
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
            <form onSubmit={(e) => {
                e.preventDefault()
                props.cadastrarGenero({nome: nomeGenero, cor: corGenero})
            }}>
                <h2>Preencha os dados para criar um novo genero.</h2>
                <Campo 
                    obrigatorio
                    label="nome" 
                    placeholder="Digite o nome do gênero"
                    valor={nomeGenero}
                    aoAlterado={valor => setNomeGenero(valor)}
                />
                <Campo
                    obrigatorio
                    label="Cor"
                    type='color'
                    placeholder="Digite a cor do time"
                    valor={corGenero}
                    aoAlterado={valor => setCorGenero(valor)}
                />
                <Botao>Criar um novo gênero</Botao>
            </form>
            <MdDeleteForever 
                size={25} 
                className='deletar' 
                onClick={() => props.aoDeletar(props.id)} 
            />
        </section>
    )
}

export default Formulario