import React, {useState} from 'react';
import classes from './App.module.css';
import {Header} from "./components/Header/Header";
import Input from "./views/Input";
import Context from "./Context";
import Result from "./views/Result";

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
  const [state, setState] = useState<{condition?: string, postcard?: string, greetings?: string}>
  ({
        condition: "input",
        postcard: '',
        greetings: ''
  });

  return (
      <div className={classes.appWrapper}>
        <div className={classes.app}>
            <Header/>
            <main className={classes.main}>
                <Context.Provider value={{
                    data: initialData,
                    state,
                    setState
                }}>
                    {state.condition==="input" ?
                          <Input/>:
                            state.condition==="result" ?
                                <Result/> :null
                    }
                </Context.Provider>
            </main>
        </div>
      </div>
  );
}

export default App;
