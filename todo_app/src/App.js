import React,{ useState, useEffect } from 'react';
import { Button , FormControl, Input, InputLabel } from '@material-ui/core';
import Todo1Task from './Todo1Task';
import './App.css';
import db from './firebase';
import firebase from 'firebase';
function App() {
  const sum= 1+1;
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const[deadlines,setDeadlines]=useState([]);
  const[dline,setDline]=useState('NO Deadline Added');
  // console.log('system input', input);

  useEffect(()=> {
// this loads / fires when the app loads + when ever dependencies changes/ triggered
    db.collection('Tasks').orderBy('timestamp','desc').onSnapshot(snapshot =>{ //always listen when ever there will be any change on database
      console.log(snapshot.docs.map(doc =>doc.data().Task));
      setTodos(snapshot.docs.map(doc =>doc.data().Task))
      setDeadlines(snapshot.docs.map(doc =>doc.data().Deadline))
    })
  },[]);

  const addTodo =(event) =>{
    // start on buton click
    event.preventDefault();//prevent from refresh and flushing static memory
    db.collection('Tasks').add({
      Task: input,
      Deadline: dline,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodos([...todos, input]);//spreading previous already input and then adding new input
    setDeadlines([...deadlines,dline]);
    setDline('');
    setInput('');//will clear any left over text in input
  }
  return (
    <div className="App">
      <h1>Hello world {sum}!</h1>
      <form>
        <FormControl>
        <InputLabel> Add a Task to my List </InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>
        <FormControl style={{margin:10}}>
        <InputLabel> Deadline: </InputLabel>
        <Input value={dline} onChange={event => setDline(event.target.value)}/>
        </FormControl>
        <Button type="submit" disabled={!input} onClick={addTodo} variant="contained" color="primary">
          Add Task{/* adding submit will refresh page  */}
         </Button>
      </form>
      
      <ul>
        {todos.map(todo => (
          <Todo1Task text={todo} />
          // <li>{todo}</li>
        ))}
        {deadlines.map(deadline =>(
            <h3>{deadline} </h3>
          ))}
      </ul>
    </div>
  );
}

export default App;
