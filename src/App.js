  import './App.css'
import React, {useState} from 'react'
// import data from './data' ;
import List from './List';
import data from './data';

const App = () => {
  const [people, setPeople] = useState(data)
  return (
    <main className="centered-container">
      <section className="container">
        <h3>{people.length}  birthdays today</h3>
        <List  people={people} />
        <button onClick={()=> setPeople([])}>Clear all</button>
      </section>
    </main>
  );
}
 
export default App
