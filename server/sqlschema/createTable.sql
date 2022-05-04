CREATE TABLE users (
	id serial,
	username varchar(32) NOT NULL UNIQUE,
	password varchar(64) NOT NULL,
  first_name varchar(32) NOT NULL,
  last_name varchar(32) NOT NULL,
	created_at TIMESTAMP,
	cohort_location varchar(16) NOT NULL,
	cohort integer NOT NULL,
	CONSTRAINT users_pk PRIMARY KEY (id)
) WITH (
  OIDS=FALSE
);



CREATE TABLE offers (
	id serial,
	date DATE,
	user_id integer NOT NULL,
	company_id integer NOT NULL,
	department_id integer,
	amount DECIMAL NOT NULL,
	position_id integer NOT NULL,
	notes varchar(1024),
	CONSTRAINT offers_pk PRIMARY KEY (id)
) WITH (
  OIDS=FALSE
);



CREATE TABLE companies (
	id serial,
	name VARCHAR(256) NOT NULL UNIQUE,
	CONSTRAINT companies_pk PRIMARY KEY (id)
) WITH (
  OIDS=FALSE
);



CREATE TABLE departments (
	id serial,
	name varchar(256) NOT NULL,
	company_id integer NOT NULL,
	CONSTRAINT departments_pk PRIMARY KEY (id)
) WITH (
  OIDS=FALSE
);



CREATE TABLE interviews (
	id serial,
	user_id integer NOT NULL,
	company_id integer NOT NULL,
	department_id integer,
	date DATE,
	position_id integer,
	notes varchar(1024),
	CONSTRAINT interviews_pk PRIMARY KEY (id)
) WITH (
  OIDS=FALSE
);



CREATE TABLE positions (
	id serial,
	name varchar(256) NOT NULL UNIQUE,
	level varchar(256) UNIQUE,
	CONSTRAINT positions_pk PRIMARY KEY (id)
) WITH (
  OIDS=FALSE
);



ALTER TABLE offers ADD CONSTRAINT offers_fk0 FOREIGN KEY (user_id) REFERENCES users(id);
ALTER TABLE offers ADD CONSTRAINT offers_fk1 FOREIGN KEY (company_id) REFERENCES companies(id);
ALTER TABLE offers ADD CONSTRAINT offers_fk2 FOREIGN KEY (department_id) REFERENCES departments(id);
ALTER TABLE offers ADD CONSTRAINT offers_fk3 FOREIGN KEY (position_id) REFERENCES positions(id);

ALTER TABLE departments ADD CONSTRAINT departments_fk0 FOREIGN KEY (company_id) REFERENCES companies(id);

ALTER TABLE interviews ADD CONSTRAINT interviews_fk0 FOREIGN KEY (user_id) REFERENCES users(id);
ALTER TABLE interviews ADD CONSTRAINT interviews_fk1 FOREIGN KEY (company_id) REFERENCES companies(id);
ALTER TABLE interviews ADD CONSTRAINT interviews_fk2 FOREIGN KEY (department_id) REFERENCES departments(id);
ALTER TABLE interviews ADD CONSTRAINT interviews_fk3 FOREIGN KEY (position_id) REFERENCES positions(id);