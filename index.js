import express from "express";

const app = express()
const PORT = process.env.PORT ?? 8000

app.get('/', (req, res) => {
    res.send("Hello World from Express JS v1.1")
})

app.get('/api', (req, res) => {
    res.send("Hello World from API v1.1")
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})