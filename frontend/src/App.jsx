import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  // useEffect(()=>{
  //   axios.get('/api/jokes')
  //   .then((response)=>{
  //     setJokes(response.data)
  //   })
  //   .catch((error)=>{
  //     console.log("Error to fetch");
      
  //   })
  // }, )

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        console.log(response.data); // Check the structure of response.data
        setJokes(Array.isArray(response.data) ? response.data : [{id:456,title:"Abhishek title ",content:"this is content"}]);
      })
      .catch((error) => {
        console.log("Error to fetch", error);
      });
  }, []);
  

 return(
  <>
    <h1>Hello this is abhishek </h1>
    <p>JOKES: {jokes.length}</p>
    {
      jokes.map((joke)=>(
        <div  key={joke.id}>
        <h3>{joke.title}</h3>
        <p>{joke.content}</p>
        </div>
        

      ))
    }
  </>
 )
}

export default App
