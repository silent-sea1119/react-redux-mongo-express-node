# Smart Rent Manager - SRM

# English
This project contains separate projects within it. One folder will contain a social network project done from Brad Traversy Udemy MERN Stack course. And other folder will contain the Smart Rent Manager project. These projects may be implemented using different technologies at some point after at least the MERN stack being completed.

The idea is that we could switch the use between React and Angular in the frontend and the application will work accordingly, for instance.

As in regard to the business, the application's purpose is to manage property, their rent, maintenance costs, profitability, etc.

We'll begin the development of this project by using Node.js, MongoDB, React and Express (MERN stack). Then, we'll try to develop the
frontend with Angular for instance, another time we'll try to do the backend with Spring REST. By doing this we will compare the easiness and the difficulties of each technology to get the same work done.

### Installation

For now, application's backend has been done with NodeJS. Download or clone the source code, then into the project's root folder navigate to:

```sh
$ cd social-networking/backend/node-mongo
$ npm install
$ npm run server
```
> A npm script will start the server on port 5000 using a cloud test database
> and you could use Postman to make requests.

```sh
@route   GET api/users/test
@desc    Tests users route
@access  Public
http://localhost:5000/api/users/test
```

```sh
@route   POST api/users/register
@desc    Register user
@access  Public
http://localhost:5000/api/users/register
```

```sh
@route   POST api/users/login
@desc    Login User / Returning JWT Token
@access  Public
http://localhost:5000/api/users/login
```
Others routes can be found in backend/node-mongo/routes/api/ directory.

# Portuguese
Esse projeto contém outros projetos em separado neste mesmo repositório. Uma pasta contém um projeto de rede social feito a partir do curso de MERN stack da Udemy do Brad Traversy. Outra pasta contém o projeto de gerenciamento de propriedade - Smart Rent Manager. Esses projetos podem ser implementados utilizando tecnologias diferentes em algum momento após terem sido concluídos utilizando-se a MERN stack.

A ideia é que nós possamos alternar o uso entre o React e o Angular no frontend e a aplicação funcionará conforme o esperado, por exemplo.

Com relação ao negócio, o propósito da aplicação é gerenciar propriedade, o aluguel das mesmas, custos de manutenção, lucro, etc.

Iremos começar o desenvolvimento desse projeto utilizando Node.js, MongoDB, React and Express (MERN stack). Após isso, tentaremos fazer
o frontend com Angular por exemplo, em um outro momento tentaremos fazer o backend com Spring REST. Ao fazer isso compararemos as
facilidades e as dificuldades de cada tecnologia para realizar o mesmo trabalho.

### Instalação 

Por hora, apenas o backend da aplicação foi feito com NodeJS. Baixe ou clone o código fonte e no diretório raiz do projeto navegue para:

```sh
$ cd social-networking/backend/node-mongo
$ npm install
$ npm run server
```
> Um script npm iniciará um servidor na porta 5000 utilizando uma base de dados
> de testes na nuvem e você poderá utilizar o Postman para fazer requisições.

```sh
@route   GET api/users/test
@desc    Tests users route
@access  Public
http://localhost:5000/api/users/test
```

```sh
@route   POST api/users/register
@desc    Register user
@access  Public
http://localhost:5000/api/users/register
```

```sh
@route   POST api/users/login
@desc    Login User / Returning JWT Token
@access  Public
http://localhost:5000/api/users/login
```
Outras rotas podem ser encontradas no diretório backend/node-mongo/routes/api/ 
