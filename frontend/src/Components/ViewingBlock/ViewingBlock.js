import React from "react";
import { useNavigate } from "react-router-dom";
import WhiteContainer from "../WhiteContainer/WhiteContainer";
import "./ViewingBlock.css"
import {get} from "../../Hooks/Network.js";


//Switch UserProducts and UserEvents to a component
// in progress
function ViewingBlock(props){
    const navigate = useNavigate();
    return(
        <>
        <div className="products">
                 <WhiteContainer>
					<h1>{props.Title}</h1>
                </WhiteContainer>
            </div>
        <div className="productsList">
                        {props.shownProducts.map((product) =>{
                            return (
                            <div className="Item">
                                <h2 className="Title">{product["name"]}</h2>
                                <img src={props.logo} alt="Invalid" className="ItemPhoto"/>
                                <div>
                                    <p><span className="ProductInfo">Price: </span>{product["price"]}</p>
                                    <p><span className="ProductInfo">Quantities left: </span>{product["quantity"]}</p>
                                    <p className="Link" onClick={() => navigate(props.navigation)}>Item Details</p>
                                </div>
                        </div>
                            );
                        })}
                            </div>
                            </>
    )
                    }

export default ViewingBlock;