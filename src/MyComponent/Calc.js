import React,{useState} from 'react';
import './Calc.css';
function Calc(){
    const[inputNumber,setinputNumber]=useState('');
    const [buttonDis,setbuttonDis]=useState({
        button1:true,
    });
    const BtnPressed=(event)=> {
        setinputNumber(inputNumber+event.target.value);
        if(event.target.value==='+'||event.target.value==='-'||event.target.value==='/'||event.target.value==='*'||event.target.value==='%'){
            setbuttonDis({button1:true});
        }
        else{
            setbuttonDis({button1:false});
        }
    };
    const EqOperator=()=>{
        setinputNumber(eval(inputNumber));
    };
    const ClearOperator=()=>{
        setinputNumber('');
    }
    return (
        <div className='box1'>
            <p className='dispNum'>{inputNumber}</p><br /><br />
            <div className='box2'>
                <button type="button" onClick={BtnPressed} className='box3' value="1" >1</button>
                <button type="button" onClick={BtnPressed} className='box3' value="2" >2</button>
                <button type="button" onClick={BtnPressed} className='box3' value="3" >3</button>
                <button type="button" onClick={BtnPressed} className='box3' value="4" >4</button>
                <button type="button" onClick={BtnPressed} className='box3' value="5" >5</button>
                <button type="button" onClick={BtnPressed} className='box3' value="6" >6</button>
                <button type="button" onClick={BtnPressed} className='box3' value="7" >7</button>
                <button type="button" onClick={BtnPressed} className='box3' value="8" >8</button>
                <button type="button" onClick={BtnPressed} className='box3' value="9" >9</button>
                <button type="button" onClick={BtnPressed} className='box3' value="0" >0</button>
                <button type="button" onClick={BtnPressed} className='box3' value="+" data-testid="button" disabled={buttonDis.button1} >+</button>
                <button type="button" onClick={BtnPressed} className='box3' value="-" data-testid="button2" disabled={buttonDis.button1}>-</button>
                <button type="button" onClick={BtnPressed} className='box3' value="/" data-testid="button3" disabled={buttonDis.button1}>/</button>
                <button type="button" onClick={BtnPressed} className='box3' value="*" data-testid="button4" disabled={buttonDis.button1}>*</button>
                <button type="button" onClick={BtnPressed} className='box3' value="%" data-testid="button5" disabled={buttonDis.button1}>%</button>
                <button type="button" onClick={EqOperator} className='box3' disabled={buttonDis.button1}>=</button>
                <button type="button" onClick={ClearOperator} className='box3'>Clear</button>
            </div>
        </div>
    );
}
export default Calc;
