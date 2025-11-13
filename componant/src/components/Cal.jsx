import React, { useState, useEffect } from "react";
// import "./css/cal.css";


export default function Calculator() {
    const [screen, setScreen] = useState("0");
    const [state, setState] = useState("s0");
    const [firstOperand, setFirstOperand] = useState(0);
    const [lastOperator, setLastOperator] = useState("?");
    const [secondOperand, setSecondOperand] = useState(0);
    const [lastOperandUsed, setLastOperandUsed] = useState(0);

    // อัปเดตหน้าจอ
    function updateScreen(value) {
        setScreen(value.toString());
    }

    function numberClicked(number) {
        if (state === "s0") {
            updateScreen(number);
            setState("s1");
        } else if (state === "s1") {
            updateScreen(screen + number);
        } else if (state === "s2") {
            updateScreen(number);
            setState("s1");
        }
    }

    function operatorClicked(operator) {
        if (state === "s1") {
            if (lastOperator !== "?" && state !== "s2") {
                const second = Number(screen);
                calculate(firstOperand, second, lastOperator);
                setSecondOperand(second);
            } else {
                setFirstOperand(Number(screen));
            }
            setLastOperator(operator);
            setState("s2");
        } else if (state === "s0") {
            setLastOperator(operator);
        } else if (state === "s2") {
            setLastOperator(operator);
        }
    }

    function calculate(a, b, operator) {
        let result = a;
        if (operator === "+") result = a + b;
        else if (operator === "-") result = a - b;
        setFirstOperand(result);
        updateScreen(result);
    }

    function equalClicked() {
        if (lastOperator === "?") return;

        let a = firstOperand;
        let b = secondOperand;
        if (state === "s1") {
            b = Number(screen);
            setSecondOperand(b);
            setLastOperandUsed(b);
        } else if (state === "s0") {
            b = lastOperandUsed;
        }

        calculate(a, b, lastOperator);
        setState("s0");
    }

    function ceClicked() {
        setScreen("0");
        setState("s0");
        setFirstOperand(0);
        setSecondOperand(0);
        setLastOperator("?");
    }

    function checkKeyboard(event) {
        if (event.key >= "0" && event.key <= "9") {
            numberClicked(Number(event.key));
        } else if (event.key === "+") {
            operatorClicked("+");
        } else if (event.key === "-") {
            operatorClicked("-");
        } else if (event.key === "Enter") {
            equalClicked();
        } else if (event.key === "Escape") {
            ceClicked();
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", checkKeyboard);
        return () => document.removeEventListener("keydown", checkKeyboard);
    });

    return (
        <div className="mx-auto mt-5 p-2 border border-dark rounded shadow" style={{ width: "fit-content" }}>
            <div className="p-2 mb-3 border text-end" style={{
                borderRadius: "10px",
                borderWidth: "2px",
                borderColor: "black",
                backgroundColor: "rgb(191, 241, 239)"
            }} id="screen">
                {screen}
            </div>

            <div>
                <button className="btn btn-success"
                    style={{
                        width: "2.5rem",
                        height: "2.5rem",
                        margin: "0.3rem",
                        borderRadius: "10px",
                        padding: 0
                    }} disabled>MC</button>
                <button className="btn btn-success" style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    margin: "0.3rem",
                    borderRadius: "10px",
                    padding: 0
                }} disabled>MR</button>
                <button className="btn btn-success" style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    margin: "0.3rem",
                    borderRadius: "10px",
                    padding: 0
                }} disabled>M+</button>
                <button className="btn btn-success" style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    margin: "0.3rem",
                    borderRadius: "10px",
                    padding: 0
                }} disabled>M−</button>
                <button className="btn btn-danger" style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    margin: "0.3rem",
                    borderRadius: "10px",
                    padding: 0
                }} onClick={ceClicked}>CE</button>
            </div>

            <div>
                <button className="btn btn-primary" style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    margin: "0.3rem",
                    borderRadius: "10px",
                    padding: 0
                }} onClick={() => numberClicked(7)}>7</button>
                <button className="btn btn-primary" style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    margin: "0.3rem",
                    borderRadius: "10px",
                    padding: 0
                }} onClick={() => numberClicked(8)}>8</button>
                <button className="btn btn-primary" style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    margin: "0.3rem",
                    borderRadius: "10px",
                    padding: 0
                }} onClick={() => numberClicked(9)}>9</button>
                <button className="btn btn-success" style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    margin: "0.3rem",
                    borderRadius: "10px",
                    padding: 0
                }} disabled>÷</button>
                <button className="btn btn-success" style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    margin: "0.3rem",
                    borderRadius: "10px",
                    padding: 0
                }} disabled>√</button>
            </div>

            <div>
                <button className="btn btn-primary" style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    margin: "0.3rem",
                    borderRadius: "10px",
                    padding: 0
                }} onClick={() => numberClicked(4)}>4</button>
                <button className="btn btn-primary" style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    margin: "0.3rem",
                    borderRadius: "10px",
                    padding: 0
                }} onClick={() => numberClicked(5)}>5</button>
                <button className="btn btn-primary" style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    margin: "0.3rem",
                    borderRadius: "10px",
                    padding: 0
                }} onClick={() => numberClicked(6)}>6</button>
                <button className="btn btn-success" style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    margin: "0.3rem",
                    borderRadius: "10px",
                    padding: 0
                }} disabled>×</button>
                <button className="btn btn-success" style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    margin: "0.3rem",
                    borderRadius: "10px",
                    padding: 0
                }} disabled>%</button>
            </div>

            <div>
                <button className="btn btn-primary" style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    margin: "0.3rem",
                    borderRadius: "10px",
                    padding: 0
                }} onClick={() => numberClicked(1)}>1</button>
                <button className="btn btn-primary" style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    margin: "0.3rem",
                    borderRadius: "10px",
                    padding: 0
                }} onClick={() => numberClicked(2)}>2</button>
                <button className="btn btn-primary" style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    margin: "0.3rem",
                    borderRadius: "10px",
                    padding: 0
                }} onClick={() => numberClicked(3)}>3</button>
                <button id="minus" className="btn btn-success" style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    margin: "0.3rem",
                    borderRadius: "10px",
                    padding: 0
                }} onClick={() => operatorClicked("-")}>−</button>
                <button className="btn btn-success" style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    margin: "0.3rem",
                    borderRadius: "10px",
                    padding: 0
                }} disabled>1/x</button>
            </div>

            <div>
                <button className="btn btn-primary" style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    margin: "0.3rem",
                    borderRadius: "10px",
                    padding: 0
                }} onClick={() => numberClicked(0)}>0</button>
                <button className="btn btn-primary" style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    margin: "0.3rem",
                    borderRadius: "10px",
                    padding: 0
                }} disabled>.</button>
                <button className="btn btn-primary" style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    margin: "0.3rem",
                    borderRadius: "10px",
                    padding: 0
                }} disabled>+⁄−</button>
                <button id="plus" className="btn btn-success" style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    margin: "0.3rem",
                    borderRadius: "10px",
                    padding: 0
                }} onClick={() => operatorClicked("+")}>+</button>
                <button className="btn btn-success" style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    margin: "0.3rem",
                    borderRadius: "10px",
                    padding: 0
                }} onClick={equalClicked}>=</button>
            </div>
        </div>
    );
}