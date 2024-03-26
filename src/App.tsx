import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import "./App.css";

type Tarefa = {
  id: number,
  titulo: string;
  concluido: boolean;
};

const ListaDeTarefas = () => {
  const [tarefas, setTarefas] = useState([]);
  const escutarCliqueAcessarAPI = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((resposta: AxiosResponse) => {
      const dados = resposta.data.map((item: { id: number; title: string; completed: boolean; }) => {
        return {
          id: item.id,
          titulo: item.title,
          concluido: item.completed,
        };
      });
      setTarefas(dados);
    });
  };
  
  return (
    <>
      <h4>Tarefas</h4>
      <div>
        <button onClick={escutarCliqueAcessarAPI}>Atualizar lista de tarefas</button>
      </div>
      <ul>
        {
          tarefas.map((item: Tarefa) => {
            return <ItemTarefa key={item.id} titulo={item.titulo} />
          })
        }
      </ul>
    </>
  );
}

const ItemTarefa = (props: {titulo: string}) => {
  return (<li>{props.titulo}</li>);
}

type Publicacao = {
  id: number,
  titulo: string,
  body: string;
};

const ListaDePublicacoes = () => {
  const [publicacoes, setPublicacoes] = useState([]);
  const escutarCliqueAcessarAPI = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts/").then((resposta: AxiosResponse) => {
      const posts = resposta.data.map((post: { id: number; title: string; body: string; }) => {
        return {
          id: post.id,
          titulo: post.title,
          conteudo: post.body,
        };
      });
      setPublicacoes(posts);
    });
  };  
  return (
    <>
      <h4>Publicacoes</h4>
      <div>
        <button onClick={escutarCliqueAcessarAPI}>Atualizar publicações</button>
      </div>
      <ul>
        {
          publicacoes.map((item: Publicacao) => {
            return <ItemPublicacao key={item.id} titulo={item.titulo} body={item.body} />
          })
        }
      </ul>
    </>
  );
}
const ItemPublicacao = (props: {titulo: string}) => {
  return (<li>{props.titulo}</li>
  <li>{props.titulo}</li>
  <li>{props.titulo}</li>);
}

type Usuario = {
  id: number,
  name: string,
  username: string,
  email: string,
  address: object,
  phone: string,
  website: string,
  company: object;
};

const ListaDeUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const escutarCliqueAcessarAPI = () => {
    axios.get("https://jsonplaceholder.typicode.com/users/").then((resposta: AxiosResponse) => {
      const users = resposta.data.map((user: { id: number; name: string; username: string; email: string;  address: object; phone: string; website: string; company: object;}) => {
        return {
          id: user.id,
          nome: user.name,
          usuario: user.username,
          email: user.email,
          endereco: user.address,
          telefone: user.phone,
          site: user.website,
          companhia: user.company,
        };
      });
      setUsuarios(users);
    });
  };  
  return (
    <>
      <h4>Publicacoes</h4>
      <div>
        <button onClick={escutarCliqueAcessarAPI}>Atualizar publicações</button>
      </div>
      <ul>
        {
          usuarios.map((item: Usuario) => {
            return <ItemUsuario key={item.id} titulo={} />
          })
        }
      </ul>
    </>
  );
}
const ItemUsuario = (props: {titulo: string}) => {
  return (<li>{props.titulo}</li>);
}

type Album = {
  id: number,
  titulo: string;
};

const ListaDeAlbuns = () => {
  const [albuns, setAlbuns] = useState([]);
  const escutarCliqueAcessarAPI = () => {
    axios.get("https://jsonplaceholder.typicode.com/users/").then((resposta: AxiosResponse) => {
      const albuns = resposta.data.map((album: { id: number; title: string;}) => {
        return {
          id: album.id,
          titulo: album.title
        };
      });
      setAlbuns(albuns);
    });
  };  
  return (
    <>
      <h4>Albuns</h4>
      <div>
        <button onClick={escutarCliqueAcessarAPI}>Atualizar albuns</button>
      </div>
      <ul>
        {
          albuns.map((item: Album) => {
            return <ItemAlbum key={item.id} titulo={item.titulo} />
          })
        }
      </ul>
    </>
  );
}
const ItemAlbum = (props: {titulo: string}) => {
  return (<li>{props.titulo}</li>);
}


const App = () => {
  return (
    <div className="avaliacao">
      <h1>Infoweb - React</h1>
      <ListaDeTarefas />
      <ListaDePublicacoes />
      <ListaDeAlbuns />
      <ListaDeUsuarios />
    </div>
  );
}

export default App;
