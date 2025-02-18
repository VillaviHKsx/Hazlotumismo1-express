//Hazlo tú mismo 1 - Construir un servidor usando Express
//Cre un servidor con las siguientes solicitudes:

import express from 'express';

const app = express();

//localhost:3000/api/name (Tu nombre completo)
app.get('/api/name', (req, res) => {
    res.send('Hernán Antonio Villavicencio Soledispa');
});

//localhost:3000/students/number (Número aleatorio entre 0 y 100)
app.get('/students/number',(req, res) => {
    const randomNumber = Math.floor(Math.random() * 101);
    res.send(randomNumber.toString());
});

//localhost:3000/courses/n1ton2 (Número aleatorio entre 1000 y 2000)
app.post('/courses/n1ton2',(req, res) => {
    const randomNumber = Math.floor(Math.random() * 1001) + 1000;
    res.send(randomNumber.toString());
});


app.listen(3000);