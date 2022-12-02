select tablex.order_id 
from( select bolt.order_id, category.supplier_id 
from bolt join category on bolt.category_id = category.id ) as tablex 
join supplier on tablex.supplier_id = supplier.id where supplier.name = 'ToLaSupplierA'