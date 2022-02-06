import React, { useState } from 'react';

export default function From(props){
    const clearAll = () => {
        props.propAlert('All text has been removed.', 'Done')
        setTxet('')
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

    const prftnal = () => {
        let newArr = text.split(/[ ]+/);
        let lastElement = newArr[newArr.length -1];
        if(lastElement === '' || (lastElement.includes('.') && lastElement.length === 1)){
            newArr.pop();
        }
        newArr.forEach((e, i) => {
            if (e.includes('.') && e !== newArr[newArr.length -1]){
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
            <div className="container mt-5">
                <h3 className="pb-2">{props.heading}</h3>
                <p className="text-muted clearTxt" onClick={clearAll}>Clear All</p>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" placeholder={props.placeholder} value={text} onChange={textAreaC}></textarea>
                <div className="row text-center">
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <button className="btn btn-primary mt-2" onClick={uppercaseClick}>UPPERCASE</button>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <button className="btn btn-warning mt-2" onClick={lowerCasecClick}>lowercase</button>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4">
                        <button className="btn btn-success mt-2" onClick={prftnal}>Professional</button>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4"></div>
                </div>
            </div>
            <div className="container mt-3">
                <h4>Your text has :</h4> <span>{text.split(' ').length - 1} Words and {text.replace(/\s+/g, '').length} Charecters</span>
            </div>
        </>
    );
}
