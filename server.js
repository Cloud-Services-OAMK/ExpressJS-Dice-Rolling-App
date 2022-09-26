if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
};

const express = require('express');

const app = express();
app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT, () => {
    console.log(`Running on port ${process.env.PORT}`)
});
