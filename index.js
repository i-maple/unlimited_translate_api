import express from 'express';

import { translateText } from './helper/translation.js';
import { router } from './route/translation.js'

const app = express()
app.use('/api/', router)


app.get('/', async (req, res)=>{
    res.json({'hello': await translateText('I am single', {from:'en', to:'de',})})
})

app.listen(8000, ()=>{
    console.log('listening on 8000')
})