import './App.css';
import {useState} from 'react'

function App() {
  const [weight, setWeight] = useState(0);
  const [bottle, setBottle] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState(0)
  const [blood, setBlood] = useState(0)
  
  function calculate(e) {
    e.preventDefault();
    let tulos = 0;
    if (gender === 'male') {
      tulos = (bottle * 0.70)
    }
    else {
      tulos = (bottle * 0.60)
    }
    setBlood(tulos);
  }
  
  return (
   <form onSubmit={calculate}> 
     <h3>Calculating alcohol blood level</h3>
     <div>
       <label>Weight</label>
       <input name ="weight" type="number" step="0.01"
        onChange={e => setWeight(e.target.value)}
        value={weight} />
    </div>
    <div>
      <label>Bottles</label>
      <input type ="number" step="1"
        onChange={e => setBottle(e.target.value)} 
        value={bottle} />
    </div>
    <div>
      <label>Time</label>
      <input type ="number" step="1"
        onChange={e => setTime(e.target.value)}
        value={time} />
    </div>
    <div>
      <label>Gender</label>
      <input type ="radio" name="gender" value="male"
        onChange={e => setGender(e.target.value)}/>
      <label>Male</label>
      <input type ="radio" name="gender" value="female"
        onChange={e => setGender(e.target.value)}/> 
        <label>Female</label> 
    </div>
    <div>
      <label>Blood level</label>
      <output>{blood}</output>
    </div>
    <div>
      <button>Calculate</button>
    </div>
    

   </form>
  );
}

export default App;
