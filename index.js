const express = require('express')
const cors = require("cors")
const PORT = 3000


const app = express()
app.use(cors())
app.use(express.json())


const users = [
    {
      "id": "1",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "password": "hashed_password_123",
      "role": "admin",
      "createdAt": "2024-12-12T10:00:00Z",
      "updatedAt": "2024-12-12T10:00:00Z"
    },
    {
      "id": "2",
      "name": "Jane Smith",
      "email": "jane.smith@example.com",
      "password": "hashed_password_456",
      "role": "user",
      "createdAt": "2024-12-10T12:30:00Z",
      "updatedAt": "2024-12-12T10:00:00Z"
    },
    {
      "id": "3",
      "name": "Alice Johnson",
      "email": "alice.johnson@example.com",
      "password": "hashed_password_789",
      "role": "user",
      "createdAt": "2024-12-11T09:15:00Z",
      "updatedAt": "2024-12-12T10:00:00Z"
    },
    {
      "id": "4",
      "name": "Bob Brown",
      "email": "bob.brown@example.com",
      "password": "hashed_password_101",
      "role": "user",
      "createdAt": "2024-12-09T18:45:00Z",
      "updatedAt": "2024-12-12T10:00:00Z"
    },
    {
      "id": "5",
      "name": "Charlie Davis",
      "email": "charlie.davis@example.com",
      "password": "hashed_password_112",
      "role": "moderator",
      "createdAt": "2024-12-08T14:20:00Z",
      "updatedAt": "2024-12-12T10:00:00Z"
    }
  ]
 
  
  app.get('/users' , (req,res) => {
    res.json(users)
  })





app.listen(PORT,() => {
    console.log(`server is running on ${PORT}`)
})