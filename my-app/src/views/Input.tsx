import React from 'react';
import {Form} from "../components/Form";
import {Button} from "../components/Button/Button";

interface Props {
    state: {
        condition: string,
        data: {
            user: {
                name: string,
                email: string
            },
            postcards: string[]
        },
        postcard: string,
        greetings: string
    },
    setState: (prevState: {
        condition: string,
        data: {
            user: {
                name: string,
                email: string
            },
            postcards: string[]
        },
        postcard: string,
        greetings: string
    }) => void;
}

const Input: React.FC<Props> = (props) => {
  const {state, setState} = props;

  return (
      <>
          <Form userName={state.data.user.name}
                postcards={state.data.postcards} />
          <Button text={"Далее"}/>
      </>
  );
}

export default Input;
