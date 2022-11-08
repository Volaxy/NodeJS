create table pokemons (
	id serial primary key,
	name varchar(30) not null,
	atk int not null,
	def int not null
);

insert into pokemons (name, atk, def) values
	('Bulbasaur', 14, 10),
	('Venusaur', 17, 15);