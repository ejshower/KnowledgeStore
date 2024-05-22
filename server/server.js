const express = require('express')
const cors = require("cors"); // cors 설정을 편안하게 하는 패키지
const app = express()

app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/sound/:animal', function (req, res) {
    const p = req.params
    console.log(p)
    if(p.animal === 'dog'){
        res.send({sound:'멍멍'})
    } else if(p.animal === 'cat'){
        res.send({sound:'야옹'})
    } else if(p.animal === 'pig'){
        res.send({sound:'꿀꿀'})
    } else {
        res.send({sound:'알수없음'})
    }
  })

app.listen(3100)