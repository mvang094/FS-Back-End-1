const express = require('express'); // To set up the server, Express needs to be imported to the top of the file (keyword: require)
//'sudo npm i express cors' to install express and cors

const cors = require('cors'); // To set up the server, Cors needs to be imported to the top of the file (keyword: require)
//cors is a package that allows the client and server to communicate with each other w/o need for advanced configuration

const app = express(); //This helps to avoid lengthy code. i.e. having to write express().get each time

app.use(cors()); //Allows the server to use cors functionality
app.use(express.json()); //Sets the server up to accept JSON object responses

let friends = ['Nitin', 'Eric', 'Jeddy', 'Cameron'];

//send the array friends to the screen; remember req = request. res = response. Cbs need these two in Handler functions
//Endpoints should be above the listen line
app.get('/api/users', (req, res) => {
    res.status(200).send(friends);
});

//Second endpoint to to tell us how the weather is today
app.get('/weather/:temperature', (req, res) => {
    const phrase = `<h3>It was ${req.params.temperature} today</h3>`;
    res.status(200).send(phrase);
})

//Another way to write the above with object destructuring
// app.get('/weather/:temperature', (req, res) => {
//     const {temperature} = req.params;
//     const phrase = `<h3>It was %{req.params.temperature} today</h3>`;
//     res.status(200).send(phrase);
// });

const SERVER_PORT = 4000;
app.listen(SERVER_PORT, () => console.log('Server is running on port 4000')); 
//Sets express server to listen to requests on port 4000
//check that the server is working by entering nodemon index.js
