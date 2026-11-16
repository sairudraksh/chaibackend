require('dotenv').config()
//basically says:"Read my .env file and make its values available to my JavaScript code."




const express = require('express');// we aquired the express module and stored it in a variable called express
const app = express();// Create an Express application and store it in app now we can use app.get(...),app.post(...),app.listen(...)

const port = 4000;//4000 is NOT being used to start the server. we are only using it here -console.log(`Example app listening on port ${port}`);

app.listen(process.env.PORT, () => {//process.env.PORT means Give me the PORT value that I wrote in .env. so it gives 3000 and it says "Start my server and make it available on port 3000."
  console.log(`Example app listening on port ${port}`);
});

//while we need app.listen()?

//Imagine your backend is a restaurant ,app.listen() This means: "Open the restaurant.",app.get() this means "If a customer asks for THIS particular thing, give them THIS."
// So overall  without app.listen() , app.get() wont work
app.get('/', (req, res) => {//"When someone visits my website's / address, send them Hello World!."
  res.send('Hello World!');//res.send('Hello World!');
});//.get() means: I want to handle a GET request.
//GET is basically when someone asks your server for something.

//   / means localhost:3000/ , /about means localhost:3000/about

// req = request

// What the user/browser is asking for.

// res = response

// What your server wants to send back.

// SO overall  it means "App, whenever someone GETs /, take their request and give them a response saying Hello World!."

app.get('/twitter',(req,res)=>{
    res.send('sairudrakshtwitter.com');
})

app.get('/login',(req,res)=>{
    res.send('<h1> please login at chai aur code </h1>');
})

app.get('/youtube',(req,res)=>{
    res.send('<h2> Chai aur code </h2>');
})

//earlier we were getting response in terminal but once we created app.listen now we have created a server at port 3000 and in that server we will get the response
// so what is a server?A server is simply a computer/program that waits for requests and gives responses.

// When you wrote:

// app.listen(3000, () => {
//   console.log("Example app listening on port 3000");
// });

// you told your computer:

// "Start this program and keep waiting for requests on port 3000."

// Now your computer is acting as a server.

// And when you wrote:

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// you told the server:

// "If someone asks for /, give them Hello World!."

// See the whole thing

// You run:

// npm run start

// ↓

// Node runs your code.

// ↓

// app.listen(3000)

// ↓

// Your server starts 🚀

// ↓

// You open:

// http://localhost:3000/

// ↓

// Browser asks:

// "Hey server, give me /."

// ↓

// Your server sees:

// app.get('/')

// ↓

// Server responds:

// Hello World!