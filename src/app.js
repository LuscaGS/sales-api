import 'dotenv/config'
import express from 'express'
import reportsRouter from './routes/reports.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.get('/health', (_req, res) => res.json({ status: 'ok' }))
app.use('/reports', reportsRouter)

app.use((_req, res) => res.status(404).json({ error: 'Route not found' }))

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})