import React, {useState} from 'react';
import {Form} from "../components/Form";
import {Button} from "../components/Button/Button";

const Input: React.FC = () => {
    const [usersData, setUsersData] = useState({
        card: '',
        text: ''
    });

    return (
      <section>
          <Form usersData={usersData}
                setUsersData={setUsersData}/>
          <Button usersData={usersData}/>
      </section>
    );
}

export default Input;
