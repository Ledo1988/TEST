import React from 'react';
import classes from './App.module.css';
import {Header} from "./components/Header/Header";
import {Form} from "./components/Form";
import {Button} from "./components/Button";

const App: React.FC = () => {
  return (
      <div className={classes.appWrapper}>
        <div className={classes.app}>
          <Header/>
          <main className={classes.main}>
            <Form/>
            <Button/>
          </main>
        </div>
      </div>
  );
}

export default App;
