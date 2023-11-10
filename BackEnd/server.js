const express = require('express')//Import the Express framework
const app = express()//Create an instance of the Express application
const port = 4000//Define the port number where the app will listen

const cors = require('cors');
app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/book', (req, res)=>{
    console.log(req.body)
    res.send("Data Received!");
})

//Define a route that has a message when the root URL is acessed
app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/api/books', (req, res) => {


    const books = [
        {
            books: [
                {
                    "title": "Learn Git in a Month of Lunches",
                    "isbn": "1617292419",
                    "pageCount": 0,
                    "thumbnailUrl":
                        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg", "authors": ["Rick Umali"],
                    "categories": []
                },
                {
                    "title": "MongoDB in Action, Second Edition",
                    "isbn": "1617291609",
                    "pageCount": 0,
                    "thumbnailUrl":
                        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
                    "status": "MEAP",
                    "authors": [
                        "Kyle Banker",
                        "Peter Bakkum",
                        "Tim Hawkins",
                        "Shaun Verch",
                        "Douglas Garrett"
                    ],
                    "categories": []
                },
                {
                    "title": "Getting MEAN with Mongo, Express, Angular, and Node",
                    "isbn": "1617292036",
                    "pageCount": 0,
                    "thumbnailUrl":
                        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
                    "status": "MEAP",
                    "authors": ["Simon Holmes"],
                    "categories": []
                }
            ]
        }

    ]
    res.json({
        myBooks: books,
        "Message": "some information",
        "disclaimer": "Hello World"
    })
})


//Starts the Express app and listens on the specified port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

const [data, setData]=userState({});

for(let i=0;i<10000000000;i++){}
axios.get('http://localhost:4000.api/books')
.then(
    (response)=>{
        setData(response.data.myBooks)
    }
)
.catch(
    (error)=>{
        console.log(error);
    }
)
