import express from 'express';
import path from 'path';

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve('pages'));
app.use('/public', express.static(path.resolve('public')));

// PAGES
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/page1', (req, res) => {
    res.render('index', {part: 'parts/page1'});
});

app.get('/page2', (req, res) => {
    res.render('index', {part: 'parts/page2'});
});

app.get('/page3', (req, res) => {
    res.render('index', {part: 'parts/page3'});
});

app.get('/login', (req, res) => {
    res.render('index', {part: 'parts/login'});
});

app.get('/admin', (req, res) => {
    res.sendStatus(401);
});

// PARTS
app.get('/api/login', (req, res) => {
    res.render('parts/login');
});

app.get('/api/page1', (req, res) => {
    res.render('parts/page1');
});

app.get('/api/page2', (req, res) => {
    res.render('parts/page2');
});

app.get('/api/page3', (req, res) => {
    res.render('parts/page3');
});

app.get('/api/admin', (req, res) => {
    res.sendStatus(401);
});

app.listen(3000, () => {
  console.log('Frontend sample app listening on port 3000!');
});
