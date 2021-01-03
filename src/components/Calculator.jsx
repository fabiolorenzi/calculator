import React, {useState} from "react";

function Calculator() {

    //---------STATES---------

    const [num, setNum] = useState("");
    const [ops, setOps] = useState([]);
    const [signs, setSigns] = useState([]);
    var total = 0;

    //---------FUNCTIONS---------

    const clearAll = e => {
        e.preventDefault();
        setNum("");
        setOps([]);
        setSigns([]);
        total = 0;
    };

    const numBuild = n => {
        if (num.length < 7) {
            let pre = num + n;
            setNum(pre);
        };
    };

    const but = e => {
        e.preventDefault();
        if (num.length > 0 | e.target.value !== "0") {
            numBuild(e.target.value);
        };
    };

    const updNum = () => {
        let preN = parseInt(num);
        let copyN = ops;
        copyN.push(preN);
        setOps(copyN);
    };

    const sum = e => {
        e.preventDefault();
        updNum();
        let copyS = signs;
        copyS.push("+");
        setSigns(copyS);
        setNum("");
    };

    const sub = e => {
        e.preventDefault();

        if (num.length === 0) {
            numBuild("-");
        } else {
            updNum();
            let copyS = signs;
            copyS.push("-");
            setSigns(copyS);
            setNum("");
        };
    };

    const mult = e => {
        e.preventDefault();
        
        updNum();
        let copyS = signs;
        copyS.push("×");
        setSigns(copyS);
        setNum("");
    };

    const division = e => {
        e.preventDefault();
        
        updNum();
        let copyS = signs;
        copyS.push("÷");
        setSigns(copyS);
        setNum("");
    };

    const solution = e => {
        e.preventDefault();
        updNum();

        let allNum = ops;
        let allSig = signs;
        for (let i = 0; i < allNum.length; i++) {
            if (allSig[i] === "÷") {
                let indx = i + 1;
                let sol1 = allNum[i] / allNum[indx];
                allNum[i] = sol1;
                allNum.splice(indx, 1);
                allSig.splice(i, 1);
            };
        };
        for (let i = 0; i < allNum.length; i++) {
            if (allSig[i] === "×") {
                let indx = i + 1;
                let sol2 = allNum[i] * allNum[indx];
                allNum[i] = sol2;
                allNum.splice(indx, 1);
                allSig.splice(i, 1);
            };
        };
        total = allNum[0];
        for (let i = 0; i < allSig.length; i++) {
            if (allSig[i] === "+") {
                let add1 = allNum[i+1];
                total += add1;
            } else {
                let sut1 = allNum[i+1];
                total -= sut1;
            };
        };
        setNum(total);
    };

    //---------RETURN---------

    return(
        <div className="fullMachine">
            <p id="nameMachine">Calculator <b>by</b> L. Fabio</p>
            <div id="output">
                <h2>{num}</h2>
            </div>
            <div className="grid">
                <div className="firstLine">
                    <button value="0" onClick={but}>0</button>
                    <button id="clearB" onClick={clearAll}>ON/C</button>
                    <button className="oper" onClick={solution}>=</button>
                    <button className="oper" onClick={sum}>+</button>
                </div>
                <div className="secondLine">
                    <button value="7" onClick={but}>7</button>
                    <button value="8" onClick={but}>8</button>
                    <button value="9" onClick={but}>9</button>
                    <button className="oper" onClick={sub}>-</button>
                </div>
                <div className="thirdLine">
                    <button value="4" onClick={but}>4</button>
                    <button value="5" onClick={but}>5</button>
                    <button value="6" onClick={but}>6</button>
                    <button className="oper" onClick={mult}>×</button>
                </div>
                <div className="fourthLine">
                    <button value="1" onClick={but}>1</button>
                    <button value="2" onClick={but}>2</button>
                    <button value="3" onClick={but}>3</button>
                    <button className="oper" onClick={division}>÷</button>
                </div>
            </div>
        </div>
    );
};

export default Calculator;