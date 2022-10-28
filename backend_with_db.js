const express = require('express');
const cors = require('cors');
const userServices = require('./models/user-services');
const app = express();
const dotenv = require("dotenv");
dotenv.config();


 const users = {
    users_list:
    [
        {
            subject : "abcd",
            name : "yoel",
        },   
        {
            subject : "1234",
            name : "jeremy"
        }
    ]
 }


const port = process.env.PORT || 8080;


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', async (req, res) => {
    const subject = req.query.subject;

    if(subject != undefined){
       let result = findUserBySubject(subject);
       result = {users_list: result};
       res.send(result);
    }
    else{
        const savedUser = await userServices.addUser(user);
    }
 });

 const findUserBySubject= (subject) => { 
    return users['users_list'].filter( (user) => user['subject'] === subject); 
 }

app.get('/users/:id', async (req, res) => {
    const id = req.params['id'];
    const result = await userServices.findUserById(id);
    if (result === undefined || result === null)
        res.status(404).send('Resource not found.');
    else {
        res.send({users_list: result});
    }
});

app.post('/users', async (req, res) => {
    const user = req.body;
    const savedUser = await userServices.addUser(user);
    if (savedUser)
        res.status(201).send(savedUser);
    else
        res.status(500).end();
});

app.delete('/users/:id', async (req, res) => {
    const id = req.params['id']; //or req.params.id
    let result = await userServices.deleteUser(id)
    
        result = "deleted "+ result;
        res.send(result);
    
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});