import app from './app';

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('You api is working ');
});

app.listen(PORT, () => {
    console.log('Magic Happens on port' + PORT);
});
