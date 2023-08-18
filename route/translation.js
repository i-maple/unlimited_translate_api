import express from 'express'
import { translateText } from '../helper/translation.js'

const router = express.Router()

router.get('/', async (req, res) => {
    const text = req.query.text
    const to = req.query.to
    const from = req.query.from
    const options = req.query.options

    const translatedText = await translateText(text, { from: from, to: to, options:options})

    res.json({translatedText})
})

export { router } 