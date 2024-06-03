const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname,'public')));

app.listen(3000,() => {
    console.log('i am alive on 3000');
});

