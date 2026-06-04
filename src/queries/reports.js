export const TOP_PRODUCTS = `
  SELECT
    p.id,
    p.name,
    c.name AS category,
    SUM(oi.quantity) AS total_sold,
    SUM(oi.quantity * oi.unit_price) AS total_revenue
  FROM order_items oi
  JOIN products p ON p.id = oi.product_id
  JOIN categories c ON c.id = p.category_id
  GROUP BY p.id, p.name, c.name
  ORDER BY total_sold DESC
  LIMIT $1
`

export const REVENUE_BY_CATEGORY = `
  SELECT
    c.id,
    c.name AS category,
    COUNT(DISTINCT o.id) AS total_orders,
    SUM(oi.quantity) AS total_items_sold,
    SUM(oi.quantity * oi.unit_price) AS total_revenue
  FROM order_items oi
  JOIN products p ON p.id = oi.product_id
  JOIN categories c ON c.id = p.category_id
  JOIN orders o ON o.id = oi.order_id
  GROUP BY c.id, c.name
  ORDER BY total_revenue DESC
`

export const CUSTOMERS_RANKING = `
  SELECT
    u.id,
    u.name,
    u.email,
    COUNT(DISTINCT o.id) AS total_orders,
    SUM(oi.quantity * oi.unit_price) AS total_spent
  FROM users u
  JOIN orders o ON o.user_id = u.id
  JOIN order_items oi ON oi.order_id = o.id
  GROUP BY u.id, u.name, u.email
  HAVING SUM(oi.quantity * oi.unit_price) > $1
  ORDER BY total_spent DESC
`

export const MONTHLY_REVENUE = `
  SELECT
    DATE_TRUNC('month', o.created_at) AS month,
    COUNT(DISTINCT o.id) AS total_orders,
    SUM(oi.quantity * oi.unit_price) AS total_revenue
  FROM orders o
  JOIN order_items oi ON oi.order_id = o.id
  WHERE o.created_at BETWEEN $1 AND $2
  GROUP BY DATE_TRUNC('month', o.created_at)
  ORDER BY month ASC
`

export const LOW_STOCK = `
  SELECT
    p.id,
    p.name,
    c.name AS category,
    p.stock,
    p.price
  FROM products p
  JOIN categories c ON c.id = p.category_id
  WHERE p.stock <= $1
  ORDER BY p.stock ASC
`