const express = require('express')
const app = express()
const port = 3001
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const cors = require('cors')


app.use(cors({
  origin: '*'
}));

app.get('/', async (req, res) => {
  let page = req.query?.page || 1
     const response = await fetch("https://weeb-scraper.onrender.com/api/anoboy?page="+page);
     const anime = await response.json();
 
     return res.json(anime)
 
 })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

