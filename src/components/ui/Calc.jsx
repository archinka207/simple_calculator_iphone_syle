import React from 'react';
import { useState } from 'react';
import '../styles/Calc.css'
import MyButton from '../ui/MyButton';

const Calc = () => {
    const[inputData, setInputData] = useState("")
    function onClickC() {
        setInputData("")
    }
    function onClickOne() {
        setInputData(inputData + "1")
    }
    function onClickTwo() {
        setInputData(inputData + "2")
    }
    function onClickThree() {
        setInputData(inputData + "3")
    }
    function onClickFour() {
        setInputData(inputData + "4")
    }
    function onClickFive() {
        setInputData(inputData + "5")
    }
    function onClickSix() {
        setInputData(inputData + "6")
    }
    function onClickSeven() {
        setInputData(inputData + "7")
    }
    function onClickEight() {
        setInputData(inputData + "8")
    }
    function onClickNine() {
        setInputData(inputData + "9")
    }
    function onClickEqual() {
        setInputData("Сам считай, неуч!!!")
    }
    function onClickPluse() {
        setInputData(inputData + "+")
    }
    function onClickMinus() {
        setInputData(inputData + "-")
    }
    function onClickDivision() {
        setInputData(inputData + "/")
    }
    function onClickMultiplication() {
        setInputData(inputData + "*")
    }


    return (
        <div className='Calc'>
            <input 
                placeholder='0'
                className='myInput' 
                type='text'
                value={inputData}>
            </input>
            <div className='buttons'>
                <MyButton id="C" className="MyButton Grey" func={onClickC}>C</MyButton>
                <MyButton id="br_left" className="MyButton Grey" func={onClickC}>(</MyButton>
                <MyButton id="br_right" className="MyButton Grey" func={onClickC}>)</MyButton>
                <MyButton id="myzero" className="MyButton" func={onClickC}>0</MyButton>
                <MyButton id="one" className="MyButton" func={onClickOne}>1</MyButton>
                <MyButton id="two" className="MyButton" func={onClickTwo}>2</MyButton>
                <MyButton id="three" className="MyButton" func={onClickThree}>3</MyButton>
                <MyButton id="four" className="MyButton" func={onClickFour}>4</MyButton>
                <MyButton id="five" className="MyButton" func={onClickFive}>5</MyButton>
                <MyButton id="six" className="MyButton" func={onClickSix}>6</MyButton>
                <MyButton id="seven" className="MyButton" func={onClickSeven}>7</MyButton>
                <MyButton id="eight" className="MyButton" func={onClickEight}>8</MyButton>
                <MyButton id="nine" className="MyButton" func={onClickNine}>9</MyButton>
                <MyButton id="division" className="MyButton Orange" func={onClickDivision}>/</MyButton>
                <MyButton id="multiplication" className="MyButton Orange" func={onClickMultiplication}>*</MyButton>
                <MyButton id="plus" className="MyButton Orange" func={onClickPluse}>+</MyButton>
                <MyButton id="minus" className="MyButton Orange" func={onClickMinus}>-</MyButton>
                <MyButton id="equal" className="MyButton Orange" func={onClickEqual}>=</MyButton>
                <MyButton id="percent" className="MyButton" func={onClickC}>%</MyButton>
                <MyButton id="comma" className="MyButton" func={onClickC}>,</MyButton>
            </div>
        </div>
    );
};

export default Calc;