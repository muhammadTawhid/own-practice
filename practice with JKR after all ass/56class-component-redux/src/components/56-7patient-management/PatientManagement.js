import React, { useReducer, useRef } from 'react';
import { patientReducer, patientState } from '../../reducer/PatientReducer';

const PatientManagement = () => {
    const nameRef = useRef();
    const [state, dispatch] = useReducer(patientReducer, patientState)

    const handleNameSubmit = e => {
        e.preventDefault();
        dispatch({
            type: "ADD_PATIENT",
            id: state.patient.length,
            name: nameRef.current.value
        })
        nameRef.current.value = " ";
        console.log(nameRef.current.value);
    }
    console.log(state.patient)
    return (
        <div>
            {
                state.patient.map(pt =>
                    <li
                    onClick={() => dispatch({type:"REMOVE_PATIENT", id: pt.id})}
                    >patient id: {pt.id} patient name: {pt.name}
                    </li>)
            }
            {/* <p>patient id: {state.patient[0].id} patient name: {state.patient[0].name}</p> */}
            <h1>patient management {state.patient.length}</h1>
            <form onSubmit={handleNameSubmit}>
                <input type="text" ref={nameRef} />
            </form>
        </div>
    );
};

export default PatientManagement;