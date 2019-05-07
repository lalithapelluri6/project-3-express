This is an Express and sql based server to connect to react js app.
## packages used
   Express js 
   mysql2
   passport for authentication
   bcrypt
   uuui
   sequelize

### we have 2 tables and 2 association tables that are
    user table
    produce table

    Asociations:
    Farmerproduce
    storeproduce

#### we have infromation based on userType
    if userType is farmer then after login it should go to farmer dashboard
    if userType is store then after login it should navigate to store dashboard

##### controllers are build to get the information for users farmers and stores
    and for associations.
###### passport is used for user authentication
####### we have 4 routes 
       /login route for memebers to login
       /registraion route for new members
       api/farmers to navigate to farmer dashboard
       api/stores to navigate to stores

       and based on search we have another two routes which is

       api/farmer/:id to navigate based on store searching for farmers with specific produce  
       api/stores/:id to navigate based on farmer searching for stores who buys his produce.

######### TEAM WHO WORKED ON BACKEND
     Maruthi Lalitha Pelluri Venkata Sesha
     Nadire Ghalip
     Shayn Anoushirvani


     