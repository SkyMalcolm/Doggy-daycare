import React from "react";
import { useNavigate } from "react-router-dom";
import Dogs from './components/Dogs';

const DogsView = (props) => {
    const navigate = useNavigate;

    return (
        <div>
            <Dogs/>
        </div>
      )

}

export default Dogs;