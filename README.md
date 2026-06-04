```markdown
# Sales API

A REST API built with Node.js and PostgreSQL that answers business questions about sales data through analytical queries.

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express
- **Database**: PostgreSQL
- **Driver**: node-postgres (pg)

## Database Schema

```
users → orders → order_items → products → categories
```

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL

### Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/sales-api.git
cd sales-api
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables

```bash
cp .env.example .env
```

Fill in your database credentials in `.env`.

4. Create the database and run the migrations

```bash
psql -U postgres -c "CREATE DATABASE sales_db"
psql -U postgres -d sales_db -f schema.sql
psql -U postgres -d sales_db -f seed.sql
```

5. Start the server

```bash
npm run dev
```

Server will be running at `http://localhost:3000`.

## Endpoints

### `GET /reports/top-products`

Returns the best-selling products ranked by total units sold.

| Query param | Type | Default | Description |
|---|---|---|---|
| `limit` | number | `5` | Number of products to return |

---

### `GET /reports/revenue-by-category`

Returns total revenue grouped by product category, including order count and items sold.

---

### `GET /reports/customers-ranking`

Returns customers ranked by total amount spent.

| Query param | Type | Default | Description |
|---|---|---|---|
| `min_spent` | number | `0` | Minimum total spent to include |

---

### `GET /reports/monthly-revenue`

Returns revenue aggregated by month within a date range.

| Query param | Type | Default | Description |
|---|---|---|---|
| `from` | date | `2024-01-01` | Start date (YYYY-MM-DD) |
| `to` | date | today | End date (YYYY-MM-DD) |

---

### `GET /reports/low-stock`

Returns products whose stock is at or below the given threshold.

| Query param | Type | Default | Description |
|---|---|---|---|
| `threshold` | number | `5` | Maximum stock level to flag |

## Postman Collection

A ready-to-use Postman collection is included in the repository: `sales-api.postman_collection.json`.

Import it directly into Postman to test all endpoints.

## Project Structure

```
sales-api/
├── src/
│   ├── db/
│   │   └── client.js       # PostgreSQL connection pool
│   ├── queries/
│   │   └── reports.js      # SQL queries
│   ├── routes/
│   │   └── reports.js      # Route handlers
│   └── app.js              # Express app entry point
├── schema.sql              # Table definitions
├── seed.sql                # Sample data
├── .env.example            # Environment variables reference
└── package.json
```
```
