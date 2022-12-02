   delimiter //
    CREATE FUNCTION `totalpayment`(cate enum('1','2','3','4','5','6')) RETURNS bigint
        READS SQL DATA
        DETERMINISTIC
BEGIN
    DECLARE v_emp_count bigint;
    set v_emp_count = (select sum(supplement.purchase_price) 
	as totalpayment from  supplement 
    where category_id = cate);
    RETURN v_emp_count;
END  //

CREATE PROCEDURE `paylistpersupp`(supid CHAR(10))
begin select distinct ttable.category_id, fabric.totalpayment(ttable.category_id)
 from (select category.supplier_id, supplement.category_id
 from category join supplement on category.id = supplement.category_id) as ttable
where supplier_id = supid;  
 end