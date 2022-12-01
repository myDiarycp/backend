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


//for all requests the subject and id are expected to be the same
app.get('/users', async (req, res) => {
    try {
        const result = await userServices.getUsers();
        res.send({users_list: result});         
    } catch (error) {
        console.log(error);
        res.status(500).send('An error ocurred in the server.');
    }
});

app.get('/users/:subject', async (req, res) => {
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
    console.log(user)
    const savedUser = await userServices.addUser(user);
    if (savedUser)
        res.status(201).send(savedUser);
    else
        res.status(500).end();
});


app.put('/users/:id', async (req, res) => { //id is good because it is the same as subject
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
    let result = await userServices.deleteUser(req.params.id)
    result = "deleted "+ result;
    res.send(result);  
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
