const express = require('express')


const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

const employees = [
    {
        employeeID: "ACA170",
        name: "Paa Kwesi Asante JNR",
        position: "Data Analyst"
    },
    {
        employeeID: "ACA180",
        name: "Glenn Kommey",
        position: "Server Manager"
    },
    {
        employeeID: "ACA190",
        name: "Jeffery Quarm",
        position: "Database Administrator"
    },
    {
        employeeID: "ACA200",
        name: "Gabriel Nutakor",
        position: "Cloud Architect"
    }
]

app.get('/', (req, res) => {
    res.render('base', { employees });
});

app.get('/employeeList', (req, res) => {
    res.render('to-doList')
});

app.get('/to-doList', (req, res) => {
    res.render('to-doList')
});


//serve application on port 7070
const port = 7070;
app.listen(port, () => {
    console.log('server has started on port ${port}');
});