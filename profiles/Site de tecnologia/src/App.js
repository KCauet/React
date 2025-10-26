import './App.css';
import devIMG from './imagens/dev.jpg'
import Section from './components/Section';

function App() {

  return (
    <div className="App">
      <header>

        <div className='subHeader'>
          <div className='titulo'>
            <h1>Javascript</h1>
          </div>
          <div>
            <h3>Uma linguagem de programação mestra quando se fala de aplicações web</h3>
          </div>
        </div>
        
      </header>

      <main>
        <div id='maindiv'>

            <Section 
            titulo={"O que é Javascript?"} 
            desc={"Ela é uma linguagem de programação muito poderosa e usada nos dias de hoje que pode ser aplicada em varios aspectos da web por um inteiro."}
            />

            <img src={devIMG}/>

            <Section 
            titulo={"Quais suas vantagens?"} 
            desc={"Tem diversas vantagens em usar Javascript pra desenvolvimento web as quais são:"}
            />

            <Section 
            titulo={"Experiência do usuário aprimorada"}
            desc={"JavaScript permite criar interações dinâmicas nas páginas web, como animações, efeitos visuais e respostas imediatas às ações do usuário, tornando a experiência mais envolvente e agradável."}
            extraTags={
              <p>Um exemplo de interação dinâmica usando js seria validação de formulários, essa linguagem tem todas as ferramentas e frameworks necessários para facilitar todo tipo de validação</p>
            }
            />

            <Section 
            titulo={"Flexibilidade e facilidade de utilizar"} 
            desc={"É uma linguagem relativamente simples de aprender e usar, com uma sintaxe clara e uma vasta comunidade de suporte. Isso facilita o desenvolvimento e a manutenção de projetos, além de permitir que desenvolvedores com diferentes níveis de experiência trabalhem com ela."}
            extraTags={
              <p>Além de sua documentação ser simples e facil de entender, há toneladas de conteúdo pela internet á fora para aprender todos os tipos de beneficios que o JS traz.</p>
            }
            />

            <Section 
            titulo={"Redução da carga no servidor"}
            desc={"Por ser executado no lado do cliente (navegador), JavaScript ajuda a reduzir a carga no servidor, pois parte do processamento é feita no dispositivo do usuário. Isso pode resultar em páginas mais rápidas e em um melhor desempenho geral da aplicação."}
            extraTags={
              <p>Possibilitando assim desenvolvimento de jogos online direto do navegador serem um processo bem mais fluido e simples.</p>
            }
            />

            <Section 
            titulo={"Conclusão"}
            desc={"O JavaScript é uma ferramenta poderosa e versátil para o desenvolvimento web, oferecendo inúmeras vantagens tanto para desenvolvedores quanto para usuários."}
            extraTags={
              <p>Sua flexibilidade, facilidade de uso e capacidade de criar experiências interativas o tornam uma escolha ideal para a criação de aplicações web modernas e eficientes.</p>
            }
            
            />
          
        </div>
      </main>
    </div>
  );
}

export default App;