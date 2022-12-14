# API REST de Pokemons com NodeJS + Postgres + Docker

Este projeto foi feito em um servidor NodeJS utilizando API's para acessar um banco de dados postgres através de um container Docker.

## Instalação

Em algum terminal, digite o comando:

`docker run -e POSTGRES_PASSWORD=postgres -d -p 5432:5432 postgres`

Para inicializar o container Docker com o postgres. Em seguida, acesse o db no DBeaver por exemploo, com os dados:

* host: localhost
* port: 5432
* database: postgres
* username: postgres
* password: postgres

E execute o [SQL para executar a estrutura base do banco](./scripts/Create%20Table.sql):

```sql
create table pokemons (
	id serial primary key,
	name varchar(30) not null,
	atk int not null,
	def int not null
);

insert into pokemons (name, atk, def) values
	('Bulbasaur', 14, 10),
	('Venusaur', 17, 15);
```

Em seguida, no terminal da pasta do projeto, digite:

`npm install` e logo após `npm run start:dev`.

## URL's da API

Em seguida basta fazer as requisições através das seguintes URL's:

Caso você tenha o [Postman](https://www.postman.com/), baixe o [arquivo para as requisições](scripts/Pokemons%20NodeJS.postman_collection.json);

Para as requisições que precisarem de um body:

```json
{
	"name": "NOME",
	"atk": INT,
	"def": INT
}
```

* GET - Todos os pokemons: http://localhost:8080/pokemons.

* GET - Pega um pokemon informando um id específico: http://localhost:8080/pokemons/{id}.

* POST - Inclui um pokemon: http://localhost:8080/pokemons - Necessário informar um body.

* PUT - Edita um pokemon informando um id: http://localhost:8080/pokemons/{id} - Necessário informar um body.

* DELETE - Deleta um pokemon informando um id: http://localhost:8080/pokemons/{id}.v
