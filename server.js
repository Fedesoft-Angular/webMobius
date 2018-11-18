const express = require('express'),path = require('path');

const app = express();

app.use(express.static('./dist/bogota-limpia'));

app.get('/*', (req,res)=>
{
    res.sendFile(path.join('/dist/bogota-limpia/index.html'));
});

app.listen(process.env.PORT || 8080, ()=>{
    console.log('server started');
})