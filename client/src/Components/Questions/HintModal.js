import React from 'react'
import "../../assets/css/questionModal.css";
import Modal from '../Modal/modal';
import { useState } from 'react';

const HintModal = (props) => {



    const acceptHint=()=>{

        props.hintHandler();
        modalHandler();
    }

    
    const modalHandler=()=>{
        props.modalHandler();
    }
    return (
        <div>
            <div className="hintModal">
                <h2>Are You Sure?</h2>
                {
                    !props.powerHint?
                    <p style={{color:"red" , textAlign: "center", marginBottom: "20px"}}>Hint cost : {props.hintCost + " "}points</p>
                    :null
                }
                <h4 style={{color:"grey" , textAlign: "center", marginBottom:"10px"}}>(No Points Will Be Deducted If Hint Has Been Taken Once Or Power Stone Is Active)</h4>
                <div className="buttons">
                    <button onClick={acceptHint}>Yes</button>
                    <button onClick={modalHandler}>Cancel</button>
                </div>
            </div>
            
        </div>
    )
}

export default HintModal;
