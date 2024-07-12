//import React from 'react'; import Header from './components/Header'; import Banner from './components/Banner'; const App = () => { return ( <div> <Header /> <Banner /> </div> ); }; export default App;


//import React from 'react'; import { Componente1, Componente2, Componente3 } from './components/VariosComponentes'; const App = () => { return ( <div> <Componente1 /> <Componente2 /> <Componente3 /> </div> ); }; export default App;

//import React from 'react'; import FormaDeBolo from './components/FormaDeBolo'; const App = () => { return ( <div> <FormaDeBolo sabor="laranja" cobertura="chocolate" /> <FormaDeBolo sabor="chocolate" cobertura="chantilly" /> </div> ); }; export default App;


//import React from 'react'; import Card from './components/Card'; const App = () => { return ( <div> <Card title="Notícia 1" category="Esportes" content="Conteúdo da notícia 1" image="https://via.placeholder.com/100" /> <Card title="Notícia 2" category="Finanças" content="Conteúdo da notícia 2" /> <Card title="Notícia 3" category="Tecnologia" content="Conteúdo da notícia 3" image="https://via.placeholder.com/100" /> </div> ); }; export default App;


import React from 'react'; import Card from './components/Card'; import CardDinamico from './components/CardDinamico'; const App = () => { return ( <div> <Card title="Notícia 1" category="Esportes" content="Conteúdo da notícia 1" image="https://via.placeholder.com/100" /> <Card title="Notícia 2" category="Finanças" content="Conteúdo da notícia 2" /> <Card title="Notícia 3" category="Tecnologia" content="Conteúdo da notícia 3" image="https://via.placeholder.com/100" /> <CardDinamico> <h2>Notícia Dinâmica 1</h2> <img src="https://via.placeholder.com/100" alt="Imagem" /> <p>Conteúdo dinâmico da notícia 1</p> </CardDinamico> <CardDinamico> <h2>Notícia Dinâmica 2</h2> <p>Conteúdo dinâmico da notícia 2 sem imagem</p> </CardDinamico> </div> ); }; export default App;