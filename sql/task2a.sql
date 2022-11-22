update category_prices
set selling_price = selling_price + selling_price / 10
where category_prices.category_id = 1 and DATE(category_prices.date) > '2020-09-01';
