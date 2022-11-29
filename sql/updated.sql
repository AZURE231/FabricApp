-- reset

drop table if exists `supplement`;
drop table if exists `bolt`;
drop table if exists `category_prices`;
drop table if exists `category`;

drop table if exists `supplier_phone`;
drop table if exists `supplier`;
drop table if exists `order_process`;
drop table if exists `new`;
drop table if exists `ordered`;
drop table if exists `full_paid`;
drop table if exists `partial_paid`;
drop table if exists `cancelled`;
drop table if exists `payment`;
drop table if exists `order`;
drop table if exists `employee_phone`;
drop table if exists `customer_phone`;
drop table if exists `customer`;
drop table if exists `manager`;
drop table if exists `operational_staff`;
drop table if exists `office_staff`;
drop table if exists `partner_staff`;
drop table if exists `employee`;
drop table if exists `paymentsup`;
drop table if exists `supplierfull`;

-- Employee 
create table `employee` (
	`id` char(10) not null,
    `lname` varchar(10),
    `fname` varchar(10) not null,
    `gender` enum('male', 'female') not null,
    `address` tinytext,
    primary key (`id`)
);

create table `employee_phone` (
	`employee_id` char(10) not null,
    `phone_number` varchar(11) not null,
    primary key (`phone_number`),
    foreign key (`employee_id`) references `employee` (`id`)
);

create table `manager` (
	`id` char(10) not null,
    primary key (`id`),
    foreign key (`id`) references employee (`id`)
);

create table `operational_staff` (
	`id` char(10) not null,
    primary key (`id`),
    foreign key (`id`) references employee (`id`)
);

create table `office_staff` (
	`id` char(10) not null,
    primary key (`id`),
    foreign key (`id`) references employee (`id`)
);

create table `partner_staff` (
	`id` char(10) not null,
    primary key (`id`),
    foreign key (`id`) references employee (`id`)
);

-- Supplier 
create table `supplier` (
	`id` char(10) not null,
    `name` tinytext not null,
    `address` tinytext,
    `bank_account` char(16) not null,
    `tax_code` varchar(13) not null,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
    primary key (`id`)
);

create table `supplier_phone` (
	`supplier_id` char(10) not null,
    `phone_number` varchar(11) not null,
    primary key (`phone_number`),
    foreign key (`supplier_id`) references supplier (`id`)
);

-- Category
create table `category` (
	`id` enum('1', '2', '3', '4', '5', '6') not null,
    `supplier_id` char(10) not null,
    primary key (`id`),
    foreign key (`supplier_id`) references supplier (`id`)
); 

create table `category_prices` (
	`category_id` enum('1', '2', '3', '4', '5', '6') not null,
    `color` char(6) not null,
    `date` date not null,
    `selling_price` bigint(10) not null,
    `quantity` mediumint(10) not null,
    primary key (`category_id`, `color`),
    foreign key (`category_id`) references category (`id`)
);



-- Customer  
create table supplement (
    `category_id` enum('1', '2', '3', '4', '5', '6') not null,
    `category_color` char(6) not null,
    `date` date not null,
	`purchase_price` bigint(10) not null,
    `quantity` mediumint(10) not null,
    foreign key (`category_id`, `category_color`) references category_prices (`category_id`, `color`)
);

create table `customer` (
	`id` char(10) not null,
	`lname` varchar(10),
    `fname` varchar(10) not null,
    `address` tinytext,
    `office_staff_id` char(10) not null,
    `arrearage` bigint(10),
    `arrearage_start_date` date,
    primary key (`id`),
    foreign key (`office_staff_id`) references office_staff (`id`)
);

create table `customer_phone` (
	`customer_id` char(10) not null,
    `phone_number` varchar(11) not null,
    primary key (`phone_number`),
    foreign key (`customer_id`) references customer (`id`)
);



-- Order
create table `order` (
	`id` char(10) not null,
    `price` bigint(10) not null,
    `customer_id` char(10) not null,
    primary key (`id`),
    foreign key (`customer_id`) references customer (`id`)
);

create table `order_process` (
	`order_id` char(10) not null,
    `datetime` datetime not null,
    `operational_staff_id` char(10) not null,
    foreign key (`order_id`) references `order` (`id`),
    foreign key (`operational_staff_id`) references operational_staff (`id`)
);

create table `new` (
	`id` char(10) not null,
    primary key (`id`),
    foreign key (`id`) references `order` (`id`)
);

create table `ordered` (
	`id` char(10) not null,
    primary key (`id`),
    foreign key (`id`) references `order` (`id`)
);

create table `full_paid` (
	`id` char(10) not null,
    primary key (`id`),
    foreign key (`id`) references `order` (`id`)
);

create table `partial_paid` (
	`id` char(10) not null,
    primary key (`id`),
    foreign key (`id`) references `order` (`id`)
);

create table `cancelled` (
	`id` char(10) not null,
    `reason` varchar(1000),
    primary key (`id`),
    foreign key (`id`) references `order` (`id`)
);

create table `payment` (
	`customer_id` char(10) not null,
    `order_id` char(10) not null,
    `date` datetime not null,
    `amount` bigint(10) not null,
    `type` enum('partial', 'full'),
    foreign key (`customer_id`, `order_id`) references `order` (`customer_id` ,`id`)
);



-- Bolt
create table `bolt` (
	`id` char(10) not null,
    `category_id` enum('1', '2', '3', '4', '5', '6') not null,
    `category_color` char(6) not null,
    `length` mediumint(10) not null,
    `order_id` char(10) not null,
    primary key (`id`),
    foreign key (`category_id`, `category_color`) references category_prices (`category_id`, `color`),
    foreign key (`order_id`) references `order` (`id`)
);

insert into `employee`
values 
	('emp0000001', 'Nguyen', 'A', 'female', '497 Hoa Hao'),
    ('emp0000002', 'Tran', 'B', 'female', '123 Ly Thuong Kiet'),
    ('emp0000003', 'Le', 'C', 'male', '27 Quang Trung'),
    ('emp0000004', 'Pham', 'D', 'female', '68 Nguyen Hue'),
    ('emp0000005', 'Hoang', 'E', 'male', '321 To Hien Thanh'),
    ('emp0000006', 'Huynh', 'F', 'female', '69 Dien Bien Phu'),
    ('emp0000007', 'Phan', 'G', 'female', '1 Quang Trung'),
    ('emp0000008', 'Bui', 'H', 'male', '99 Vinh Vien'),
    ('emp0000009', 'Do', 'I', 'male', '67 Hoa Hao'),
    ('emp0000010', 'Dang', 'J', 'female', '23 To Hien Thanh'),
    ('emp0000011', 'Nguyen', 'K', 'female', '12 Quang Trung'),
    ('emp0000012', 'Tran', 'L', 'male', '56 Hoa Hao'),
    ('emp0000013', 'Nguyen', 'M', 'female', '2 Hoa Hao'),
    ('emp0000014', 'Pham', 'N', 'male', '77 Van Hanh'),
    ('emp0000015', 'Nguyen', 'O', 'male', '23 Ly Thuong Kiet'),
    ('emp0000016', 'Nguyen', 'P', 'female', '33 Van Hanh');
    
insert into `employee_phone`
values
	('emp0000001', '0989198198'),
    ('emp0000001', '0983198198'),
    ('emp0000002', '0908144144'),
    ('emp0000003', '0912481111'),
    ('emp0000004', '0918681111'),
    ('emp0000005', '0914181111'),
    ('emp0000006', '1230922123'),
    ('emp0000007', '02871061232'),
    ('emp0000008', '1900561558'),
    ('emp0000009', '1900636452'),
    ('emp0000010', '1900545419'),
    ('emp0000011', '0829173401'),
    ('emp0000012', '01686053491'),
    ('emp0000013', '0918046170'),
    ('emp0000014', '0989020399'),
    ('emp0000015', '0918046172'),
    ('emp0000016', '0989040506');

insert into `operational_staff`
values 
	('emp0000001'),
    ('emp0000005'),
    ('emp0000009'),
    ('emp0000013');
    
insert into `office_staff`
values 
	('emp0000002'),
    ('emp0000006'),
    ('emp0000010'),
    ('emp0000014');
    
insert into `partner_staff`
values 
	('emp0000003'),
    ('emp0000007'),
    ('emp0000011'),
    ('emp0000015');
    
insert into `manager`
values 
	('emp0000004'),
    ('emp0000008'),
    ('emp0000012'),
    ('emp0000016');

insert into `supplier`
values 
	('sup0000001', 'ToLaSupplierA', '4 Cong Quynh', '0004100031212002', '3500806643', '2022-07-15 07:00:01','2022-07-15 07:00:01'),
    ('sup0000002', 'ToLaSupplierB', '111 De Tham', '0004100031213003', '3500806644', '2022-07-15 07:00:01','2022-07-15 07:00:01'),
    ('sup0000003', 'ToLaSupplierC', '34 Dong Du', '0004100031214004', '3500806645','2022-07-15 07:00:01','2022-07-15 07:00:01'),
    ('sup0000004', 'ToLaSupplierD', '231 Ham Nghi', '0004100031215005', '3500806646','2022-07-15 07:00:01','2022-07-15 07:00:01');

insert into `supplier_phone`
values
	('sup0000001', '01686053492'),
    ('sup0000002', '01686053493'),
    ('sup0000002', '01686053494'),
    ('sup0000003', '01686053495'),
    ('sup0000004', '01686053496');

insert into `category`
values
   ('1', 'sup0000001'),
   ('2', 'sup0000003'),
   ('3', 'sup0000002'),
   ('4', 'sup0000002'),
   ('5', 'sup0000002'),
   ('6', 'sup0000004');


insert into `category_prices`
values 
	('1', '000000', '2022-01-01', 380000, 5000),
    ('1', 'FFFFFF', '2019-02-02', 370000, 4000),
    ('2', '000000', '2022-02-02', 400000, 6000),
    ('3', 'CACACA', '2022-03-03', 390000, 8000),
    ('3', 'FF0000', '2022-04-04', 470000, 7000),
    ('4', '00FF00', '2022-05-05', 450000, 2000),
    ('5', '0000FF', '2022-06-06', 460000, 3000),
    ('6', 'FFFF00', '2022-07-07', 420000, 1000),
    ('4', '00FFFF', '2019-08-08', 390000, 10000);
    
    
insert into `customer`
values 
	('cus0000001', 'Tran', 'B', '456 Ly Thuong Kiet', 'emp0000002', '1000000', '2022-07-14'),
    ('cus0000002', 'Nguyen', 'C', '789 Ly Thuong Kiet', 'emp0000002', '1000000', '2022-07-14'),
    ('cus0000003', 'Pham', 'D', '90 Ly Thuong Kiet', 'emp0000006', '1000000', '2022-07-14'),
	('cus0000004', 'Nguyen', 'A', '56 Ly Thuong Kiet', 'emp0000010', '1000000', '2022-07-14');
    
insert into `customer_phone`
values 
	('cus0000001', '0829173402'),
    ('cus0000001', '0829173403'),
    ('cus0000002', '0829173404'),
    ('cus0000004', '0829173405');
        
insert into `order`
values 
	('ord0000001', 20000000, 'cus0000001'),
    ('ord0000002', 10000000, 'cus0000001'),
    ('ord0000003', 11000000, 'cus0000004'),
    ('ord0000004', 5000000, 'cus0000002'),
    ('ord0000005', 7000000, 'cus0000002'),
    ('ord0000006', 18000000, 'cus0000001'),
    ('ord0000007', 14000000, 'cus0000004'),
    ('ord0000008', 50000000, 'cus0000004'),
    ('ord0000009', 2000000, 'cus0000003'),
    ('ord0000010', 3000000, 'cus0000001'),
    ('ord0000011', 5000000, 'cus0000003'),
    ('ord0000012', 32000000, 'cus0000001'),
    ('ord0000013', 33000000, 'cus0000004'),
    ('ord0000014', 13000000, 'cus0000001'),
    ('ord0000015', 12000000, 'cus0000004'),
    ('ord0000016', 21000000, 'cus0000002'),
    ('ord0000017', 34000000, 'cus0000003'),
    ('ord0000018', 37000000, 'cus0000002'),
    ('ord0000019', 42000000, 'cus0000001'),
    ('ord0000020', 50000000, 'cus0000004');

insert into `supplement`
values
	('1', '000000', '2022-01-01', 700000000, 2000),
    ('1', '000000', '2022-01-31', 1000000000, 3000),
    ('1', 'FFFFFF', '2022-02-02', 1400000000, 4000),
    ('2', '000000', '2022-03-03', 1800000000, 2000),
    ('2', '000000', '2022-04-04', 1300000000, 4000),
    ('3', 'CACACA', '2022-05-05', 1400000000, 8000),
    ('3', 'FF0000', '2022-06-06', 1000000000, 4000),
    ('3', 'FF0000', '2022-07-07', 800000000, 3000),
    ('4', '00FF00', '2022-08-08', 900000000, 2000),
    ('5', '0000FF', '2022-09-09', 1500000000, 3000),
    ('6', 'FFFF00', '2022-10-10', 900000000, 1000),
    ('4', '00FFFF', '2022-11-11', 70000000, 10000); 


insert into `new`
values
	('ord0000001'),
    ('ord0000006'),
    ('ord0000011'),
    ('ord0000016');
    
insert into `partial_paid`
values
	('ord0000007'),
    ('ord0000002'),
    ('ord0000012'),
    ('ord0000017');
    
insert into `full_paid`
values
	('ord0000003'),
    ('ord0000008'),
    ('ord0000013'),
    ('ord0000018');
    
insert into `ordered`
values
	('ord0000004'),
    ('ord0000014'),
    ('ord0000019'),
    ('ord0000009');
    
insert into `cancelled`
values
	('ord0000005', 'tao thich'),
    ('ord0000015', 'het tien'),
    ('ord0000010', 'me khong cho mua'),
    ('ord0000020', 'ngheo`');

insert into `order_process`
values
	('ord0000001', '2022-02-16 20:00:00', 'emp0000001'),
    ('ord0000002', '2022-03-03 08:00:00', 'emp0000001'),
    ('ord0000003', '2022-03-03 17:00:00', 'emp0000009'),
    ('ord0000002', '2022-03-04 09:00:00', 'emp0000005');

insert into `payment`
values 
	('cus0000001', 'ord0000001', '2022-07-15 07:00:01', '19000000', 'partial'),
    ('cus0000001', 'ord0000001', '2022-07-16 07:00:01',  '1000000', 'partial'),
    ('cus0000001', 'ord0000002', '2022-07-16 07:00:01', '10000000', 'full'),
    ('cus0000004', 'ord0000003', '2022-07-09 00:00:00', '90000000', 'full');

insert into `bolt`
values
	('blt0000001', '1', '000000', 12000, 'ord0000004'),
    ('blt0000002', '1', 'FFFFFF', 30000, 'ord0000004'),
    ('blt0000003', '2', '000000', 3000, 'ord0000005'),
    ('blt0000004', '1', '000000', 12000, 'ord0000001');

create table paymentsup
select ttable.category_id as id,ttable.supplier_id,ttable.totalpayment
from (
select category.supplier_id, supplement.category_id, sum(supplement.purchase_price) as totalpayment
from category
join supplement on category.id = supplement.category_id group by supplement.category_id
)as ttable ;

alter table paymentsup 
add   `createdAt` datetime NOT NULL,
add  `updatedAt` datetime NOT NULL;

create table supplierfull
select category_prices.category_id as id, paymentsup.createdAt, paymentsup.supplier_id, paymentsup.totalpayment, category_prices.color, category_prices.date as updatedAt, category_prices.selling_price, category_prices.quantity
from paymentsup join category_prices on paymentsup.id = category_prices.category_id