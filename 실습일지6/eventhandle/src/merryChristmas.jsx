import React from "react";

function MerryChristmas() {
    return(
        <div style={{display: "flex", backgroundColor: "black", weight: "100wh", height: "100vh", alignItems: "center", justifyContent: "center"}}>
            <div style={{margin: "0", color: "green", textAlign: "center", fontSize: "1.5rem", letterSpacing: "1.4rem", fontWeight: "bold"}}>
                <div><span style={{color: "gold"}}>★</span></div>
                <div>
                    <span>*</span><br/>
                    <span>*<span style={{color: "indianred"}}>*</span></span><br/>
                    <span>*<span style={{color: "indianred"}}>*</span>*</span>
                </div>
                <div>
                    <span>*</span><br/>
                    <span style={{color: "palegoldenrod"}}>*<span style={{color: "cornflowerblue"}}>*</span></span><br/>
                    <span>*<span style={{color: "cornflowerblue"}}>*</span>*</span><br/>
                    <span>*<span style={{color: "cornflowerblue"}}>*</span><span style={{color: "palegoldenrod"}}>*</span>*</span><br/>
                    <span>*<span style={{color: "cornflowerblue"}}>*</span>*<span style={{color: "palegoldenrod"}}>*</span>*</span>
                </div>
                <div>
                    <span>*</span><br/>
                    <span>**</span><br/>
                    <span><span style={{color: "mediumpurple"}}>*</span>*<span style={{color: "palegreen"}}>*</span></span><br/>
                    <span>*<span style={{color: "mediumpurple"}}>*</span><span style={{color: "palegreen"}}>*</span>*</span><br/>
                    <span>**<span style={{color: "mediumpurple"}}>*</span>**</span><br/>
                    <span>**<span style={{color: "palegreen"}}>*</span><span style={{color: "mediumpurple"}}>*</span>**</span><br/>
                    <span>**<span style={{color: "palegreen"}}>*</span>*<span style={{color: "mediumpurple"}}>*</span>**</span>
                </div>
                <div style={{color: "saddlebrown"}}>
                    <span>========</span><br/>
                    <span>=======</span><br/>
                    <span>=====</span>
                </div>
                <div>
                    <p style={{color: "white", fontWeight: "normal", letterSpacing: "1rem"}}>Merry 안Christmas!</p>
                </div>
            </div>
        </div>
    );
}

export default MerryChristmas;