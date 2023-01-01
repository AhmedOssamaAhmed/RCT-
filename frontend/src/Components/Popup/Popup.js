import "./Popup.css";
import {useState} from "react";
import BlueButton from "../BlueButton/BlueButton.js";
import WhiteContainer from "../WhiteContainer/WhiteContainer.js";

/* Usage Example:
    <Popup name="add Daypart">
      <>
        <h1>Test</h1>
        <button className='styled-button'>Do something</button>
      </>
    </Popup>
*/

export default function Popup(props){
    const [popupShown, setPopupShown] = useState("hidden");
    return(
        <>
            <BlueButton onClick={() => {setPopupShown("shown")}} text={props.name} />
            <div className={"popup " + popupShown}>
                <div className="popup-container">
                    <WhiteContainer>
                        <button className={"popup-close-btn"} onClick={() => {setPopupShown("hidden")}}>x</button>
                        {props.children}
                        <div className="popup-form-buttons">
                            <BlueButton 
                                bgColor="#e5e5e5"
                                color="#000"
                                onClick={function(){setPopupShown("hidden");}}
                                text="Cancel"
                            />
                            <BlueButton 
                                onClick={function(){
                                    props.onActionBtnClick();
                                    setPopupShown("hidden");
                                }}
                                text={props.actionBtnLabel}    
                            />
                        </div>
                    </WhiteContainer>
                </div>
            </div>
        </>
    );
}
