import React from "react";
import {TextField} from "./TextField/TextField";
import {CardsSlider} from "./CardsSlider/CardsSlider";
import {TextArea} from "./TextArea/TextArea";

interface Props {
    usersData: {
        card: string,
        text: string
    }

    setUsersData: (prevState: any) => void;
}


export const Form: React.FC<Props> = (props) => {
    const {usersData, setUsersData} = props;
console.log(usersData)
    return (
        <div className="form">
            <TextField/>
            <CardsSlider usersData={usersData}
                         setUsersData={setUsersData}/>
            <TextArea usersData={usersData}
                      setUsersData={setUsersData}/>
        </div>
    );
};