DELIMITER //
CREATE PROCEDURE  category_count (in start_date date, in end_date date)
BEGIN
	select category.supplier_id, count(distinct category.id) as cc
	from supplement join category on supplement.category_id = category.id
	where DATE(supplement.`date`) between start_date and end_date
	group by category.supplier_id
	order by cc;
END //
DELIMITER ;
