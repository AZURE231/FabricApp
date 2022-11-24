delimiter //
create procedure paylistpersup (supid CHAR(10))
begin
select ttable.category_id, ttable.totalpayment from (
select category_supplier.supplier_id, supplement.category_id, sum(supplement.price) as totalpayment
from category_supplier
join supplement on category_supplier.category_id = supplement.category_id group by supplement.category_id
)as ttable where supplier_id = supid;

end //
call paylistpersup('sup0000001')