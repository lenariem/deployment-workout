# Deployment Exercise 1 - Create an Atlas account

Go to MongoDB Atlas Page:
https://www.mongodb.com/cloud/atlas

- Signup for free
  - Fill out register form with a reachable email (you need to verify your account)
  - Create a Cluster (will take some minutes to complete)
  - Setup a user
    - necessary for remote connection
    - please use for the same "string" for username and password 
      -> e.g. username: user123 and password: user123
      -> makes it much easier to test
  - Setup Network Access > IP Whitelist > Access from everywhere

- Connect to your Atlas DB using Compass (tab "Connect")
  - Grab the connection string specific for compass and paste it into the Compass start screen
  - Create a collection and fill in a document
  - Check in Atlas if you can see the created data (tab "Collections")


- Video Guide: https://www.youtube.com/watch?v=KKyag6t98g8

## Bonus

- Connect to your Atlas DB using a Node App
  - Grab the connection string specific for apps and paste it into mongoose.connect
    - `mongoose.connect(...yourConnString...)`
  - Test if the connection to Atlas works, e.g. by:
    - `mongoose.connect(...).then(() => console.log("YAY! Connection works!")`
