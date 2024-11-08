import express from 'express'
import cors from 'cors'




const app = express()

const corsOptions={
  origin:"https://abhishek-web.vercel.app/",
  optionsSuccessStatus:200,
};
app.use(cors(corsOptions))

app.get('/',(req,res)=>{
  res.send("This is Abhishek ")
})

app.get('/api/jokes',(req,res)=>{
  const jokes = [
    {
      id:1,
      title:"A joke",
      content: "this is a joke "
    },
    {
      id:2,
      title:"A2 joke",
      content: "this2 is a joke "
    },
    {
      id:3,
      title:"A3 joke",
      content: "this is a joke "
    },
    {
      id:4,
      title:"A 4joke",
      content: "this is a joke "
    },
    {
      id:5,
      title:"A5 joke",
      content: "this is a joke "
    },
    {
      id:6,
      title:"A 6joke",
      content: "this is a joke "
    },
    {
      id:7,
      title:"A 7joke",
      content: "this is a joke "
    },
    {
      id:8,
      title:"A8 joke",
      content: "this is a joke "
    },
  ]

  res.send(jokes)
})



 const port = process.env.port||5000

app.listen(port,()=>{
  console.log(`Hey! Abhishek your App is listing on http://localhost:${port}`);
  
})