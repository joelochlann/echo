const express = require('express');
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.json()); // support json encoded bodies

function echo(req, res) {
    console.log('=====================');
    console.log('HEADERS');
    console.log(req.headers);

    console.log('\n=====================');
    console.log('BODY');
    console.log(req.body)
    console.log('\n\n');

    return res.send(req.body);
}

app.get('/echo', echo);
app.post('/echo', echo);

app.listen(3000, () => console.log('Example app listening on port 3000!'))