import { Router } from 'express'
import pool from '../db/client.js'
import {
  TOP_PRODUCTS,
  REVENUE_BY_CATEGORY,
  CUSTOMERS_RANKING,
  MONTHLY_REVENUE,
  LOW_STOCK,
} from '../queries/reports.js'

const router = Router()

// GET /reports/top-products?limit=5
router.get('/top-products', async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 5
    const { rows } = await pool.query(TOP_PRODUCTS, [limit])
    res.json({ data: rows })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// GET /reports/revenue-by-category
router.get('/revenue-by-category', async (req, res) => {
  try {
    const { rows } = await pool.query(REVENUE_BY_CATEGORY)
    res.json({ data: rows })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// GET /reports/customers-ranking?min_spent=0
router.get('/customers-ranking', async (req, res) => {
  try {
    const minSpent = parseFloat(req.query.min_spent) || 0
    const { rows } = await pool.query(CUSTOMERS_RANKING, [minSpent])
    res.json({ data: rows })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// GET /reports/monthly-revenue?from=2024-01-01&to=2024-12-31
router.get('/monthly-revenue', async (req, res) => {
  try {
    const from = req.query.from || '2024-01-01'
    const to   = req.query.to   || new Date().toISOString().split('T')[0]
    const { rows } = await pool.query(MONTHLY_REVENUE, [from, to])
    res.json({ data: rows })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// GET /reports/low-stock?threshold=5
router.get('/low-stock', async (req, res) => {
  try {
    const threshold = parseInt(req.query.threshold) || 5
    const { rows } = await pool.query(LOW_STOCK, [threshold])
    res.json({ data: rows })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

export default router