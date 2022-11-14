const express = require('express');
const cors = require('cors');
const userServices = require('./models/diary-services');
const app = express();
const dotenv = require("dotenv");
dotenv.config();




const port = process.env.PORT || 8080;


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', async (req, res) => {
    const name = req.query['name'];
    try {
        const result = await userServices.getUsers(name);
        res.send({users_list: result});         
    } catch (error) {
        console.log(error);
        res.status(500).send('An error ocurred in the server.');
    }
});

app.get('/users/:subject', async (req, res) => { //subject is specified
    const subject = req.params['subject'];
    const result = await userServices.findUserBySubject(subject);
    if (result === undefined || result === null){
        const user = req.body;
        const savedUser = await userServices.addUser(user);
        if (savedUser)
        res.status(201).send(savedUser);
        else
        res.status(500).end();
    }
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


app.put('/users/:id', async (req, res) => { //CHANGE TO SUBJECT LATER
        try {
            await userServices.findUserBySubjectAndUpdate(req.params.id,req.body);
            res.status(201).send("Updated");
        }
        catch(err) {
        console.error(err.message);
        res.status(500).send("Server Error");
        }
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

function randomSubject(){
    return String(Date.now());
}
