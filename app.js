const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.use("/api/v1/contact", require('./routes/contactRoutes'));
// To monitor get call based on provided path
app.get('/', (req, res) => {
    res.status(200).json({hi: 'Vanakamungo...'});
});

// Listening mentioned port 
app.listen(port, ()=>{
    console.log(`Vankam da mapla, I am listening port: ${port}`);
});
