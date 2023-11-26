create database projetoIndividual;
use projetoIndividual;

create table usuario(
idUsu int primary key auto_increment,
nomeUsu  varchar(45),
emailUsu varchar(100),
senhaUsu char(16),
numSorte int);

create table jogada(
idJogada int auto_increment,
fkUsu int,
qtdAcertoJogada int,
primary key (idJogada, fkUsu),
constraint fkJogadaUsuario 
	foreign key jogada(fkUsu) 
		references usuario(idUsu)); 
        
create table questoes(
idQuestoes int primary key,
acertosPorCem decimal(2,2),
fkJogada int,
constraint fkQuestoesJogada
	foreign key questoes(fkJogada)
		references jogada(idJogada));        

-- insert into usuario (nomeUsu, emailUsu, senhaUsu) values 
-- ('abc', 'maycon.og','1234');

select * from usuario;
select * from jogada;

insert into questoes(idQuestoes) values 
(1),(2),(3),(4),(5),
	(6),(7),(8),(9),(10);

select * from questoes;