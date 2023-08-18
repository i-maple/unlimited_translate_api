import express from 'express';

import { translateText } from './helper/translation.js';
import { router } from './route/translation.js'

const app = express()
app.use('/api/', router)


app.get('/', async (req, res)=>{
    res.send('<h1><a href="https://github.com/i-maple/unlimited_translate_api.git">Click Here to Read Docs of API</a></h1>')
})

app.listen(8000, ()=>{
    console.log('listening on 8000')
})