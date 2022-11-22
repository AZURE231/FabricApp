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
    `partner_staff_id` char(10) not null,
    primary key (`id`),
    foreign key (`partner_staff_id`) references partner_staff (`id`)
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
