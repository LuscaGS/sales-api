INSERT INTO categories (name) VALUES
  ('Electronics'),
  ('Clothing'),
  ('Food'),
  ('Books');

INSERT INTO products (name, price, stock, category_id) VALUES
  ('Pro Notebook',            4500.00, 3,  1),
  ('Wireless Mouse',           120.00, 50, 1),
  ('Mechanical Keyboard',      350.00, 8,  1),
  ('Basic T-Shirt',             59.90, 2,  2),
  ('Jeans',                    199.90, 15, 2),
  ('Rice 5kg',                  25.00, 100,3),
  ('Coffee 500g',               32.00, 4,  3),
  ('Clean Code',               120.00, 20, 4),
  ('The Pragmatic Programmer', 140.00, 12, 4),
  ('BT Headphone',             800.00, 1,  1);

INSERT INTO users (name, email) VALUES
  ('Ana Silva',    'ana@email.com'),
  ('Bruno Lima',   'bruno@email.com'),
  ('Carla Souza',  'carla@email.com'),
  ('Diego Rocha',  'diego@email.com'),
  ('Eva Torres',   'eva@email.com');

INSERT INTO orders (user_id, created_at) VALUES
  (1, '2024-01-15'),
  (1, '2024-02-20'),
  (2, '2024-01-10'),
  (3, '2024-03-05'),
  (3, '2024-03-18'),
  (4, '2024-02-28'),
  (5, '2024-04-01'),
  (2, '2024-04-15');

INSERT INTO order_items (order_id, product_id, quantity, unit_price) VALUES
  (1, 1, 1, 4500.00),
  (1, 2, 2,  120.00),
  (2, 8, 1,  120.00),
  (2, 9, 1,  140.00),
  (3, 3, 1,  350.00),
  (3, 4, 3,   59.90),
  (4, 2, 1,  120.00),
  (4, 6, 5,   25.00),
  (5, 7, 2,   32.00),
  (5, 5, 1,  199.90),
  (6, 10,1,  800.00),
  (6, 1, 1, 4500.00),
  (7, 8, 2,  120.00),
  (8, 3, 1,  350.00),
  (8, 2, 3,  120.00);