
<p> <h1 align="center">Projeto Portifólio</h1></p>

<p align="center">
    <img width="700" src="https://github.com/SuellenDiass/SuellenDiass/assets/102911341/e56fb447-9c70-4d9b-a749-af8692ae3e0e">
</p>
<p align="center">Seja redirecionado à página do 
<a href="https://suellendiass.github.io/javascript-portifolio-profissional/" target="_blank">projeto</a></p>

## Descrição do projeto 

Nesse curso, aprendemos a criar um portfólio utilizando HTML5, CSS3 e JavaScript. O projeto final apresenta as habilidades adquiridas, desde a lógica de programação básica até o uso avançado de HTML5 e CSS3 para estruturar o conteúdo do site. Além disso, utilizamos JavaScript para gerenciar o conteúdo HTML e centralizamos as funções da API responsável por consumir os dados do arquivo "profile.json" através de requisições HTTP GET. O resultado é um portfólio interativo e dinâmico que destaca nossas competências e conhecimentos em desenvolvimento web.


- [x] Sobre a estrutura do código no arquivo index.html:

O arquivo "index.html" é a página HTML que define a estrutura e o conteúdo do site. Nesse caso específico, o site é um portfólio de Suellen Dias. Vamos explicar a estrutura e o objetivo do código:

1. **Metadados**: A seção `<head>` contém metadados sobre a página, como a codificação de caracteres, compatibilidade com o Internet Explorer e a configuração da escala de visualização em dispositivos móveis.

2. **Título**: O título da página é definido dentro da tag `<title>`. Neste caso, o título é "Portifólio Suellen Dias".

3. **Links para Estilos**: Vários links para arquivos CSS são fornecidos para estilizar o conteúdo da página. Esses arquivos estão localizados na pasta "assets/css" e são divididos em diferentes arquivos para diferentes seções da página, como o cabeçalho, o acordeon, as habilidades, o portfólio, etc.

4. **Corpo da Página**: O corpo da página começa com a tag `<body>` e contém o conteúdo visível da página.

5. **Cabeçalho (Header)**: O cabeçalho da página está dentro da tag `<header>`. Ele contém informações sobre o perfil, como uma foto de perfil, nome, cargo, localização, telefone e email. O conteúdo desses elementos é inicializado como "Carregando..." e será preenchido dinamicamente posteriormente usando JavaScript (arquivo "main.js").

6. **Seções Acordeon**: Há várias seções de acordeon na página, representadas pela tag `<section class="acordeon">`. Cada seção possui um botão com a classe "trigger" e um conteúdo oculto dentro da tag `<div class="content">`. Essas seções funcionarão como painéis expansíveis que mostram e escondem informações quando o botão "trigger" é clicado.

7. **Rodapé (Footer)**: O rodapé da página contém um link para o site da DIO (Digital Innovation One), que é aberto em uma nova aba quando clicado.

8. **Scripts JavaScript**: Os arquivos JavaScript que fornecem a funcionalidade dinâmica ao site estão incluídos no final da página, dentro da tag `<script>`. Os arquivos "acordeon.js" e "api.js" contêm funções específicas que manipulam o acordeon e fazem a requisição para o arquivo "profile.json". O arquivo "main.js" é responsável por carregar os dados do perfil no HTML e atualizar o conteúdo das seções com os dados obtidos.

O objetivo deste código é criar uma página web de portfólio com um design responsivo e dinâmico, onde as informações do perfil serão carregadas de forma assíncrona a partir do arquivo "profile.json" usando JavaScript. O acordeon permite que as informações sobre as habilidades, idiomas, portfólio e experiência profissional sejam expandidas ou recolhidas, tornando a página mais organizada e fácil de navegar.


- [x] Sobre a estrutura do código no arquivo acordeon.js:

Neste trecho de código, está sendo implementado um acordeon simples usando JavaScript para manipular as classes CSS de determinados elementos. O objetivo é criar uma funcionalidade onde, quando o usuário clicar em um dos elementos com a classe `.trigger`, o elemento pai (`.acordeon`) altera a sua classe para adicionar ou remover a classe `.open`. Isso fará com que o elemento pai alterne entre o estado de aberto e fechado, simulando o comportamento de um acordeon.

Vamos analisar o código passo a passo:

1. `const acordeonTriggers = document.querySelectorAll('.acordeon .trigger')`: Aqui, a constante `acordeonTriggers` é definida como uma lista de todos os elementos que possuem a classe `.trigger` e estão dentro de elementos que possuem a classe `.acordeon`.

2. `acordeonTriggers.forEach((trigger) => { ... })`: A função `forEach` é usada para iterar sobre cada elemento da lista `acordeonTriggers`. Isso permitirá que cada elemento com a classe `.trigger` tenha um evento de clique associado.

3. `trigger.addEventListener('click', (e) => { ... })`: Aqui, um ouvinte de evento de clique é adicionado a cada elemento com a classe `.trigger`. Quando o usuário clicar em um desses elementos, o código dentro da função de callback será executado.

4. `const acordeon = trigger.parentElement`: A constante `acordeon` é definida como o elemento pai (`.acordeon`) do elemento que recebeu o clique (`.trigger`).

5. `const isOpen = acordeon.classList.contains('open')`: A constante `isOpen` verifica se o elemento pai (`acordeon`) possui a classe `.open`. Isso é feito utilizando o método `classList.contains()`, que retorna `true` se o elemento possui a classe especificada e `false` caso contrário.

6. `if (isOpen) { ... } else { ... }`: Com base na verificação anterior, esse trecho de código adiciona ou remove a classe `.open` do elemento pai (`.acordeon`) quando o usuário clica no elemento filho (`.trigger`). Se o elemento estiver aberto (possuindo a classe `.open`), a classe é removida, fechando-o. Caso contrário, a classe é adicionada, abrindo-o.

O resultado final é que, quando o usuário clicar em um elemento com a classe `.trigger`, o acordeon expandirá ou recolherá o conteúdo associado (elemento `.acordeon`) ao alternar a classe `.open`. Dessa forma, a seção acordeon se comportará como um painel expansível, permitindo que o usuário visualize ou esconda o conteúdo conforme desejado.


- [x] Sobre a estrutura do código no arquivo api.js:

Nesse trecho de código no arquivo `api.js`, está sendo definida uma função assíncrona chamada `fetchProfileData()` que tem como objetivo realizar uma requisição HTTP GET para consumir os dados contidos no arquivo local "profile.json" em vez de acessar uma URL externa.

Aqui está a explicação do que foi feito:

1. Comentários: Os comentários no início do arquivo `api.js` informam que as funções da API foram centralizadas no arquivo, e que a requisição HTTP GET está sendo feita para obter os dados do arquivo "profile.json".

2. Alteração da URL: A constante `url` foi definida com o valor `'data/profile.json'`, o que indica que o arquivo "profile.json" está localizado na pasta `data` em relação ao local do arquivo `api.js`. Essa é a alteração feita para consumir o arquivo local em vez de uma URL externo.

3. Função assíncrona: A função `fetchProfileData()` é declarada como assíncrona usando a palavra-chave `async`. Isso permite que a função utilize o operador `await` para aguardar a conclusão da requisição `fetch()` sem bloquear a execução de outras partes do código.

4. Requisição HTTP GET: A função utiliza a API `fetch()` para fazer uma requisição HTTP GET ao arquivo "profile.json" local. O método `fetch()` retorna uma Promise que será resolvida com a resposta da requisição.

5. `response.json()`: A resposta da requisição é transformada em formato JSON usando o método `json()` da resposta. Isso transforma os dados JSON da resposta em um objeto JavaScript.

6. Retorno dos dados: A função retorna o objeto JavaScript contendo os dados do perfil lidos do arquivo "profile.json".

O objetivo dessa estrutura de código é centralizar as funções de acesso aos dados do perfil, fazendo a requisição para o arquivo local "profile.json". Essa abordagem é útil para desenvolvimento e testes, pois permite que você trabalhe com os dados localmente antes de fazer a implantação do projeto e utilizar uma API externa ou servidor para obter os dados. Assim, você pode facilmente alternar entre os dados locais e dados de uma fonte externa, o que é especialmente útil durante o desenvolvimento de um projeto web.

- [x] Sobre a estrutura do código no arquivo main.js:

Neste trecho de código, existem várias funções JavaScript que têm como objetivo atualizar o conteúdo do HTML de uma página web com base nos dados fornecidos pelo arquivo "profile.json". A estrutura do código é composta por:

1. `updateProfileInfo(profileData)`: Esta função recebe os dados do perfil (profileData) como argumento e atualiza as informações do perfil na página, tais como foto, nome, cargo, localização, telefone e email. Para cada campo, a função atualiza o elemento correspondente no HTML com o valor fornecido nos dados do perfil.

2. `updateSoftSkills(profileData)`: Essa função atualiza a seção de habilidades sociais do perfil (softSkills) na página. Ela mapeia cada habilidade em uma tag de lista `<li>` e insere todas as habilidades como itens de lista em uma tag `<ul>`.

3. `updateHardSkills(profileData)`: Semelhante à função anterior, essa função atualiza a seção de habilidades técnicas do perfil (hardSkills) na página. Ela mapeia cada habilidade técnica em uma tag de lista `<li>` e insere todas as habilidades técnicas como itens de lista em uma tag `<ul>`. Além disso, ela também adiciona um ícone (imagem) para cada habilidade técnica, usando a URL da imagem fornecida nos dados do perfil.

4. `updateLanguages(profileData)`: Essa função atualiza a seção de idiomas do perfil (languages) na página. Ela mapeia cada idioma em uma tag de lista `<li>` e insere todos os idiomas como itens de lista em uma tag `<ul>`.

5. `updatePortfolio(profileData)`: Essa função atualiza a seção de portfólio do perfil (portfolio) na página. Ela mapeia cada projeto no array de projetos do perfil (portfolio) e insere cada projeto como um item de lista com o nome do projeto e um link para o projeto (caso seja fornecido um link para o GitHub, a classe "github" é adicionada ao elemento `<h3>`).

6. `updateProfessionalExperience(profileData)`: Esta função atualiza a seção de experiência profissional do perfil (professionalExperience) na página. Ela mapeia cada experiência profissional no array de experiências do perfil (professionalExperience) e insere cada experiência como um item de lista com o nome do cargo, período e descrição.

7. Finalmente, o código utiliza uma função assíncrona autoinvocada (IIFE) para carregar os dados do perfil chamando `fetchProfileData()`. Após obter os dados, as funções de atualização são chamadas para preencher o conteúdo na página.

O objetivo desse código é atualizar dinamicamente as informações do perfil e outras seções da página a partir dos dados fornecidos pelo arquivo "profile.json". Dessa forma, o perfil pode ser facilmente atualizado apenas modificando o arquivo "profile.json" sem precisar alterar manualmente o código HTML. Isso torna a manutenção do site mais simples e flexível, permitindo que você exiba facilmente diferentes perfis ou informações em páginas diferentes sem precisar duplicar ou reescrever o código.

- [x] Sobre a pasta assets, consta as imagens, fontes , icones e estilos utilizados na estilização da página

###

#### Curso Formação JavaScript Developer da Dio.me administrado pelo mentor Renan Paula/ Tech Lead no S3 Bank

[DIO](https://www.dio.me/).
