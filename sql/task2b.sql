select tablex.order_id from(
select bolt.order_id, category_supplier.supplier_id
from bolt
join category_supplier on bolt.category_id = category_supplier.category_id ) as tablex
join supplier on tablex.supplier_id = supplier.id where supplier.sname = 'ToLaSupplierA';
