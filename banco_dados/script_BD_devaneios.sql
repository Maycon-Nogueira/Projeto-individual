create database projetoIndividual;
use projetoIndividual;

create table usuario(
idUsu int primary key auto_increment,
nomeUsu  varchar(45),
emailUsu varchar(100),
senhaUsu char(16));

create table numeroSorte(
numSorte int ,
fkUsu int,
primary key(numSorte,fkUsu));

create table questao(
idQuestao int primary key);

create table tentativa(
idTent int auto_increment,
fkUsu int,
fkQuestao int,
acerto int,
pontos int,
primary key(idTent, fkUsu,fkQuestao),
constraint tentativaUsuario
	foreign key tentativa(fkUsu) 
		references usuario(idUsu),
constraint tentativaQuestao
	foreign key tentativa(fkQuestao) 
		references questao(idQuestao));

describe usuario;
describe numeroSorte;
describe questao;
describe tentativa;

select * from usuario;

insert into questao values
(1),(2),(3),(4),
	(5),(6),(7),(8);
    
-- insert into tentativa(fkUsu,idTent,fkQuestao, acerto, pontos) values
-- ( 1, 1, 1, 'sim', 1),
-- ( 1, 1, 2, 'sim', 4),
-- ( 1, 1, 3, 'sim', 1),
-- ( 1, 1, 4, 'sim', 2),
-- ( 1, 1, 5, 'sim', 1),
-- ( 1, 1, 6, 'sim', 1),
-- ( 1, 1, 7, 'sim', 2),
-- ( 1, 1, 8, 'sim', 8);

select * from tentativa;
select * from usuario;
select * from questao;

select nomeUsu, sum(pontos), sum(acerto)  from tentativa
join usuario
on tentativa.fkUsu = usuario.idUsu
group by nomeUsu