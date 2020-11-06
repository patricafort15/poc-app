const express = require('express');

const app = express();

app.use(express.static('./dist/kma-app'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/kma-app/'}),
);

app.listen(process.env.PORT || 5000);