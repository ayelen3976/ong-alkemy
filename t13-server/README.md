# Team 13 - Alkemy Ong Server

## Envinroment setup

1) Create database
2) Copy .env.example to .env and fill with database credentials.

To install dependencies, run
``` bash
npm install
```

3) Migrations:
``` bash
npx sequelize-cli db:migrate
```

4) Seeders:
``` bash
npx sequelize-cli db:seed:all
```

## Start local server

``` bash
npm start
```

## Users Seed

``` RoleId: 1 (admin)

FirstName       LastName
Lucas           Demo1 
Lucía           Demo2 
Hugo            Demo3
Sofía           Demo4 
Martín          Demo5 
María           Demo6
Daniel          Demo7 
Martina         Demo8
Pablo           Demo9
Paula           Demo10 


``` roleId: 2 (standard)

Apellidos en orden del Demo11 (Alejandro) al Demo20 (Emma)  
Alejandro, Julia, Mateo, Daniela, Adrian, Valeria, Alvaro, Sandra, Manuel, Emma

* Los emails empiezan con el mismo nombre ej Lucas@test.com en cada uno; 
passwords todos 1234 y organizationId: 1