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
acertoPorQuestao int);

 -- constraint fkQuestoesJogada
	-- foreign key questoes(fkJogada)
		-- references jogada(idJogada));        

-- insert into usuario (nomeUsu, emailUsu, senhaUsu) values 
-- ('abc', 'maycon.og','1234');

select * from usuario;
select * from jogada;

insert into usuario(nomeUsu, emailUsu, senhaUsu, numSorte) values
('Maycon', 'maycon.nogueira@sptech.school', 'admin', 23);

insert into jogada(fkUsu, qtdAcertoJogada) values
(1,20);

insert into questoes(acertoPorQuestao) values 
(1),
(1),
(1),
(1),
(1),	
(1),
(1),
(1);

insert into jogada(qtdAcertoJogada) values
(2);

select * from questoes;
truncate table Questoes;
 drop table questoes;