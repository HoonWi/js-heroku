import express from 'express';

const app = express()

const PORT = process.env.POP || 3000;
app.use (express.static('build'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/build/index.html')
})

app.listen(3000, () => {
  console.log('server is running!');
});
