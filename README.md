# Guideline to run the backend server.
make sure to "npm i" every package first


--> first as we are not having a remote server for our database, we are going to use our machine (localhost) as a database. so makesure to install postgres database on your machine or pc.

steps. once your are sure you have installed postgres on your machine check if it is there by runnig 'psql' on the cmd terminal. 
if everything is ok. now you are going to create a database and a table on your machine

# step 1: run the following script in server directory "node config/initDb.js"
this is to create the database called "hibirlink" by a user postgres

# step2: run the following script in server directory "node config/initDbTable.js"
this is to create the users table. also the information is defined in the files and the .env file
