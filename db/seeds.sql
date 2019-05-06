INSERT INTO Users(userName,password,userType,email,address,city,zipcode,phone)
VALUES('John Smith','password','Farmer','johnS@gmail.com','25500 Clawiter Rd','Hayward',94545,510-265-8600),(2,'Janet Fuller','password','Farmer','jFuller@gmail.com','3440 Enterprise Ave','Hayward',94545,510-783-1270),(3,'Steven Buchnan','password','Farmer','StevenB@gmail.com','15 Poppy House Rd','Rio Vista',94545,707-374-2111),(4,'Ricky Conner', 'password', 'Farmer','RickyC@gmail.com','6342 Bystrum Rd','Ceres',95307,209-538-3131),(5,'Mary Wood', 'password', 'Farmer','WoodMary@gmail.com','Farmcom Real','Ceres',95307,559-232-5603),(6,'Lucky', 'password','Store','Customerservice@lucky.com','6155 W. Las Positas','Pleasanton',94588,925-462-1520),(7,'Robert King', 'password', 'Farmer','KingR@gmail.com','7798 Vegetable Farms','Sacramento Valley',95307,510-233-5643),(8,'Walmart', 'password','Store','Service@walmart.com','15555 Hesperian Blvd','San Leandro',94579,510-351-0108),
(9,'Walmart', 'password','Store','CustomerService@safeway.com','5918 Stoneridge Mall Road','Pleasanton',94579,707-374-2111),(10,"Trader's Joe",'password','Store','inquiry@tradersjoe.com','85 Railroad Ave','Danville',94526,925-838-5757),(11,'Whole Foods','password','Store','Servicedesk@wholefoods.com','5200 Dublin Blvd','Dublin',94568,925-452-2226),(12,'Safe Way', 'password','Store','safewaysocialmedia@safeway.com','1701 Santa rita rd','Pleasanton',94566,925-417-5530);

-- PRODUCE TABLE

INSERT INTO Produces(id,prod_id, prod_Name)
VALUES (1, 1003921-918, 'Broccoli');

INSERT INTO Produces(id,Prod_id, prod_Name)
VALUES (2, 1013594-856,'lettuce');

INSERT INTO Produces(id,Prod_id, prod_Name)
VALUES (3,1023425-442,'carrots');

INSERT INTO Produces(id,Prod_id, prod_Name)
VALUES (4,103333-491,'bellpepper');

INSERT INTO Produces(id,Prod_id, prod_Name)
VALUES (5,1043561-556,'basil');

INSERT INTO Produces(id,Prod_id, prod_Name)
VALUES (6,1053498-824,'okra');

INSERT INTO Produces(id,Prod_id, prod_Name)
VALUES (7,1063668-569,'apples');

INSERT INTO Produces(id,Prod_id, prod_Name)
VALUES (8,1073790-330,'cilantro');

INSERT INTO Produces(id,Prod_id, prod_Name)
VALUES (9,1083668-478,'banana');

INSERT INTO Produces(id,Prod_id, prod_Name)
VALUES (1093561-590,'parsley');

INSERT INTO Produce(id,Prod_id, prod_Name)
VALUES (10,1103743-623,'garlic');

INSERT INTO Produces(id,Prod_id, prod_Name)
VALUES (11,1123176-600,'oranges');

INSERT INTO Produces(id,Prod_id, prod_Name)
VALUES (12,1133240-812,'grapes');

INSERT INTO Produces(id,Prod_id, prod_Name)
VALUES (13,1143276-900,'almonds');

INSERT INTO Produces(id,Prod_id, prod_Name)
VALUES (14,1153354-622, 'poultry');

INSERT INTO Produces(id,Prod_id, prod_Name)
VALUES (15,1163176-745,'livestock');

INSERT INTO Produces(id,Prod_id, prod_Name)
VALUES (16,1173408-999,'strawberries');

INSERT INTO Produces(id,Prod_id, prod_Name)
VALUES (17,1183298-200,'squash');

INSERT INTO Produces(id,Prod_id, prod_Name)
VALUES (18,1193370-710,'dairy');

INSERT INTO Produces(id,Prod_id, prod_Name)
VALUES (19,1043910-420,'beans');

INSERT INTO Produces(id,Prod_id, prod_Name)
VALUES (20,1043987-583,'tomatoes');

INSERT INTO Produces(id,Prod_id, prod_Name)
VALUES (21,1043888-654,'onions');

INSERT INTO Produces(id,Prod_id, prod_Name)
VALUES (22,1043180-945,'potatoes');

-- -- INVENTORY TABLE

-- INSERT INTO Inventories(inven_id,prod_Name,price,stock_remain,threshold)
-- VALUES (4011,'banana',0.25,200,100);

-- INSERT INTO Inventories(inven_id,prod_Name,price,stock_remain,threshold)
-- VALUES (4026,'squash',0.75,40,30);

-- INSERT INTO Inventories(inven_id,prod_Name,price,stock_remain,threshold)
-- VALUES (4013,'strawberry',8.00,75,50);

-- INSERT INTO Inventories(inven_id,prod_Name,price,stock_remain,threshold)
-- VALUES (4065,'apples',0.25,230,100);

-- INSERT INTO Inventories(inven_id,prod_Name,price,stock_remain,threshold)
-- VALUES (4019,'oranges',0.20,200,100);

-- INSERT INTO Inventories(inven_id,prod_Name,price,stock_remain,threshold)
-- VALUES (4027,'tomatoes',0.20,200,150);

-- INSERT INTO Inventories(inven_id,prod_Name,price,stock_remain,threshold)
-- VALUES (4031,'onions',0.25,250);

-- USER INVENTORY JOINING TABLE

-- INSERT INTO User_Inventories(user_id,prod_Name,stock_remain)
-- VALUES (103,'onions',250);

-- INSERT INTO User_Inventories(user_id,prod_Name,stock_remain)
-- VALUES (102,'tomatoes',140);

-- INSERT INTO User_Inventories(user_id,prod_Name,stock_remain)
-- VALUES (101,'oranges',200);

-- INSERT INTO User_Inventories(user_id,prod_Name,stock_remain)
-- VALUES (104,'apples',175);

-- INSERT INTO User_Inventories(user_id,prod_Name,stock_remain)
-- VALUES (106,'banana',200);

-- USER(farmer) PRODUCE Join TABLE

INSERT INTO farmer_Produces(user_id,prod_id)
VALUES (1, 8), (2, 5);

-- INSERT INTO farmer_Produces(user_id,prod_id,prod_Name,quantity)
-- VALUES (2,1043888-654,'onions',500);

-- INSERT INTO farmer_Produces(user_id,prod_id,prod_Name,quantity)
-- VALUES (1006,1173408-999,'strawberries',500);

-- INSERT INTO farmer_Produces(user_id,prod_id,prod_Name,quantity)
-- VALUES (1004,1133240-812,'grapes',100);

-- INSERT INTO farmer_Produces(user_id,prod_id,prod_Name,quantity)
-- VALUES (1002,1193370-710,'dairy',30);

-- INSERT INTO farmer_Produces(user_id,prod_id,prod_Name,quantity)
-- VALUES (1005,1163176-745,'livestock',30);

-- INSERT INTO farmer_Produces(user_id,prod_id,prod_Name,quantity)
-- VALUES (1003,1063668-569,'apples',500);


-- USERS(STORES) PRODUCES TABLE



INSERT INTO store_Produces(stock_remain,threshold,price)
VALUES (102,1063668-569,300,250,0.30);

INSERT INTO store_Produces(user_id,prod_id,stock_remain,threshold,price)
VALUES (103,1163176-745,30,15,15,3.00);

INSERT INTO store_Produces(user_id,prod_id,stock_remain,threshold,price)
VALUES (104,1173408-999,30,15,20,3.00);

INSERT INTO store_Produces(user_id,prod_id,stock_remain,threshold,price)
VALUES (101,1193370-710,35,16,15,3.00);

INSERT INTO store_Produces(user_id,prod_id,stock_remain,threshold,price)
VALUES (105,1193370-710,35,16,15,3.00);

















