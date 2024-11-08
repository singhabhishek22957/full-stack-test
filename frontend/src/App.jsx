import { useEffect, useState } from 'react'
import axios from 'axios'

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  header: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '1rem',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 2rem',
  },
  navLinks: {
    listStyleType: 'none',
    display: 'flex',
    gap: '1rem',
    margin: 0,
    padding: 0,
  },
  main: {
    padding: '2rem',
  },
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '1rem',
    marginTop: '2rem',
  },
};
  


function Navbar() {
  return (
    <header style={styles.header}>
      <nav style={styles.navbar}>
        <h2>Welcome Page</h2>
        <ul style={styles.navLinks}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

// Footer Component
function Footer() {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 Abhishek Kumar Singh</p>
    </footer>
  );
}

// Main Content Component
function MainContent() {
  return (
    <main style={styles.main}>
      <h1>Hello, I'm Abhishek Kumar Singh</h1>
      <p>Welcome to my website! Explore and learn more about what I do.</p>
    </main>
  );
}


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
    axios.get('https://abhishek-website-i74a.onrender.com/api/jokes')
      .then((response) => {
        console.log(response.data); // Check the structure of response.data
        setJokes(Array.isArray(response.data) ? response.data : [{id:456,title:"Abhishek title ",content:"this is content"}]);
      })
      .catch((error) => {
        console.log("Error to fetch", error);
      });
  }, []);


  // Inline styles for simplicity


 return(
  <>
  <div style={styles.container}>
      <Navbar />  {/* Header */}
      <MainContent />  {/* Main Content */}
      <Footer />  {/* Footer */}
    </div>

    

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
