create schema clima;
use clima;

CREATE TABLE temperatura
(
	id_temperatura INT(4) NOT NULL auto_increment,
    dato DECIMAL(4, 1),
    PRIMARY KEY (id_temperatura)
);

CREATE TABLE presion
(
	id_presion INT(4) NOT NULL auto_increment,
    dato DECIMAL(4, 1),
    PRIMARY KEY (id_presion)
);

CREATE TABLE humedad
(
	id_humedad INT(4) NOT NULL auto_increment,
    dato DECIMAL(4, 1),
    PRIMARY KEY (id_humedad)
);

CREATE TABLE luz
(
	id_luz INT(4) NOT NULL auto_increment,
    dato DECIMAL(4, 1),
    PRIMARY KEY (id_luz)
);

CREATE TABLE registro
(
	id_registro INT(4) NOT NULL auto_increment,
	id_temperatura INT(4) NOT NULL,
    id_humedad INT(4) NOT NULL,
    id_presion INT(4) NOT NULL,
    id_luz INT(4) NOT NULL,
    fecha DATE NOT NULL,
	PRIMARY KEY (id_registro),
	UNIQUE KEY fecha (fecha),
	FOREIGN KEY id_temperatura(id_temperatura) REFERENCES temperatura(id_temperatura),
    FOREIGN KEY id_humedad(id_humedad) REFERENCES humedad(id_humedad),
    FOREIGN KEY id_presion(id_presion) REFERENCES presion(id_presion),
    FOREIGN KEY id_luz(id_luz) REFERENCES luz(id_luz)
);