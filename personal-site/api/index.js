const express = require('express')
const app = express()

app.get('/api/test', (req, res) => {
    res.json({
        test: 'Hello I am the api backend server!'
    })
})

app.listen(3001, () => console.log('Starting api server on port 3001'))