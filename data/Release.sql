create table cad.pessoa
(
	id uuid not null
		constraint pessoa_pk
			primary key,
	nome varchar not null,
	identificacao varchar not null
);

