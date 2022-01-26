import React, {useState} from 'react';

export default function From(props){
    const clearAll = ()=>{
        setTxet('')
    };
    const textAreaC = (event)=>{
       setTxet(event.target.value);
    };
    const uppercaseClick = ()=>{
      setTxet(text.toLocaleUpperCase());
    };
    const lowerCasecClick = ()=>{
        setTxet(text.toLowerCase());
    };
    const FLAlpha = ()=>{
        let arr = text.split('');
        arr.forEach((e,i)=>{
            if(e === '.' && arr[i+1] === ' '){
                arr[i+2] = arr[i+2].toUpperCase();
            }
            if(e === '.' && !(arr[i+1] === ' ')){
                arr.splice(i+1,0,' ');
                arr[i+2] = arr[i+2].toUpperCase();
            }
        })
        let finalTxt = arr.join('');
        let value = finalTxt[0].toUpperCase() + finalTxt.slice(1);
        setTxet(value);
    };



    const [text, setTxet] = useState('');
    return (
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
                <button className="btn btn-warning mt-2" onClick={FLAlpha}>Professional</button>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4"></div>
            </div>
        </div>
    );
}
