import React, {useState} from 'react';
import classes from './App.module.css';
import {Header} from "./components/Header/Header";
import Input from "./views/Input";

interface Props {
    initialData: {
        user: {
                name: string,
                email: string
        },
        postcards: string[]
    }
}

const App: React.FC<Props> = (props) => {
  const {initialData} = props;
  const [state, setState] = useState({
        condition:"input",
        data: initialData,
        postcard: '',
        greetings: ''
  });
console.log(initialData)
  return (
      <div className={classes.appWrapper}>
        <div className={classes.app}>
            <Header/>
            <main className={classes.main}>
                {state.condition==="input" ?
                      <Input state={state}
                             setState={setState}/>:null
                }
            </main>
        </div>
      </div>
  );
}

export default App;
