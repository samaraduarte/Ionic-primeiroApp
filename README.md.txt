## DESENVOLVIMENTO MOBILE EXERCÍCIO PRÁTICA IONIC
UniBH 2020 /2 - Prof.Ramon Pereira
1) Instale o Ionic-CLI npm install -g @ionic/cli
2) Inicie um aplicativo com ionic start
a) Nome do projeto: primeiroApp
b) Não usar Capacitor
c) Utilizar o template pronto SideMenu
d) Utilizar Angular
3) No app component existe uma variável appPages. Substitua o menu pré existente
pelo seguinte menu: Home, Amigos, Viagens cada um com sua respectiva página.
Utilize um icone conhecido do Ionic para estilização
(https://ionicframework.com/docs/v3/ionicons/)
4) Crie os componentes Amigos e Viagens (ionic generate page nomedaPagina)
5) Verifique o app routing module ajustando as rotas para as definidas pelo array
appPages na página home.
6) Adicione o <ion-menu> em nestes dois componentes
7) No componente Amigos crie uma lista de amigos fictícia. Colocar essa lista de
amigos em um array e exibi-las no componente ion-list através do Binding aprendido
no angular. Esses amigos deverão conter os dados nome, idade, nível de amizade
(de 1 a 5) além disso um ícone clicável deletar que executa um ActionSheet para
com as opções “Deletar, Editar, Cancelar”
8) A opção deletar deverá executar uma função deleteAmigo() que deverá excluir o
amigo do array de amigos. (https://ionicframework.com/docs/api/list)
9) No componente Viagens crie um array de viagens contendo local, descricao, data da
visita e imagem da viagem.
10) No template do componente Viagens adicione o elemento <ion-card> para exibir os
dados da sua viagem. (https://ionicframework.com/docs/api/card)