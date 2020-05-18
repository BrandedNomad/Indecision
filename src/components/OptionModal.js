import React from 'react'
import Modal from 'react-modal';

const OptionModal = (props)=>{
    return (
        <Modal
            isOpen={!!props.selectedOption}
            onRequestClose={props.handleClearPick}
            constentLabel="Selected Option"
            closeTimeoutMS={200}
            className="modal"
        >
            <h3 className="modal__title">Selected Option</h3>
            {props.selectedOption && <p className="modal_body">{props.selectedOption}</p>}
            <button className="button" onClick={props.handleClearPick}>Okay</button>
        </Modal>
    )
}

export default OptionModal