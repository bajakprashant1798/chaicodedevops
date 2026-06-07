import express from "express";

const app = express()
const PORT = process.env.PORT ?? 8000

app.get('/', (req, res) => {
    res.send("Hello World from Express JS v2.1 with docker")
})

app.get('/api', (req, res) => {
    res.send("Hello World from API v2.1")
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})