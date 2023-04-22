const url = require('url')
const express = require('express')
const router = express.Router()
const needle = require('needle')
const { profile } = require('console')

const API_BASE_URL = process.env.API_BASE_URL
const API_KEY_NAME = process.env.API_KEY_NAME
const API_KEY_VALUE = process.env.API_KEY_VALUE

router.post('/', async (req, res) => {
    try {
        const profiles = req.body
        const options = {
            json: true,
            headers: {
                'Content-Type': 'application/json'
            }
        };
        console.log(profiles);
        const urlWithApikey = `${API_BASE_URL}?${API_KEY_NAME}=${API_KEY_VALUE}`
        const apiRes = await needle('post', urlWithApikey, profiles, options)
        const data = apiRes.body
        res.status(200).json(data)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error })
    }
})


module.exports = router