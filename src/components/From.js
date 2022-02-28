import React, { useState } from 'react';
import CopyText from './reusable/CopyText';

export default function From(props) {
    const clearAll = () => {
        props.propAlert('All text has been removed.', 'Done');
        setTxet('');
    };
    const textAreaC = (event) => {
        setTxet(event.target.value);
    };

    const uppercaseClick = () => {
        setTxet(text.toLocaleUpperCase());
    };

    const lowerCasecClick = () => {
        setTxet(text.toLowerCase());
    };

    const professional = async() => {
        const textArr = text.split(/[ ]+/);

        const mapArr =  textArr.map((e,i)=>{
            // this for make space after in-word dots 
            if(e.includes('.') && e[e.length -1] !== '.'){
                let splitvalue = e.split('.');
                // console.log(splitvalue);
                
                let jointData = splitvalue.join('. ');
            //    console.log(jointData);
               return jointData
            }
            else if(e === textArr[textArr.length -1] && !e.includes('.')){
                // adding '.', if it's not present in the end of the last sentence
                let add_dot = `${e}.`;
                return add_dot
            }
            else{
                return e
            }
        });

        // remove the single dots 
        const newArr = mapArr.filter(e => {
            if(e.includes('.') && e.length === 1){
                return false
            }
            return e
        })

        newArr.forEach((e, i) => {
            // making uppercase the word which apears after the dot 
            if (e.includes('.') && e !== newArr[newArr.length - 1]) {
                let uppercaseTxt = newArr[i + 1];
                let newArrTxt = uppercaseTxt[0].toUpperCase() + uppercaseTxt.slice(1);
                //  replaceing the perticular elemnet with the new one 
                newArr.splice(i + 1, 1, newArrTxt);
            }
        });
        // removing the first index if it is a empty string
        if (newArr[0] === '') {
            newArr.shift();
        }
        
        // making the first letter uppercase 
        let firstChar = newArr[0][0].toUpperCase() + newArr[0].slice(1);
        newArr.splice(0, 1, firstChar);

        let finalValue = newArr.join(' ');

        setTxet(finalValue);
    };

    const [text, setTxet] = useState('');
    return (
        <>
            <div className="container from_container mt-5">
                <h3 className="pb-2">{props.heading}</h3>
                <p className="text-muted clearTxt" onClick={clearAll}>Clear All</p>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" placeholder={props.placeholder} value={text} onChange={textAreaC} spellCheck="true"></textarea>
                <div className="row text-center">
                    <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                        <button className="btn btn-primary mt-2" onClick={uppercaseClick}>UPPERCASE</button>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4 col-6">
                        <button className="btn btn-warning mt-2" onClick={lowerCasecClick}>lowercase</button>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4">
                        <button className="btn btn-success mt-2" onClick={professional}>Make Professional with double click</button>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4"></div>
                </div>
                <div className="copy_form">
                    {
                        text.length !== 0 && <CopyText alert={props.propAlert} textvalue={text} name="Copy Text" />
                    }
                </div>
            </div>
            <div className="container mt-3">
                <h4>Your text has :</h4> <span>{text.split(' ').length - 1} Words and {text.replace(/\s+/g, '').length} Charecters</span>
            </div>
        </>
    );
}
