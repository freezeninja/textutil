import React, { useState } from 'react';
import { useBarcode } from 'react-barcodes';
import PrintDownload from './reusable/PrintDownload';

export default function BarCode() {
  const [inputVal, setInputVal] = useState('Demo barcode');
  const [submitVal, setSubmitVal] = useState('Demo barcode');
  const [barcodesrc, setBarcodeSrc] = useState('');


  const { inputRef } = useBarcode({
    value: `${submitVal}`,
    options: {
      background: '#ccffff',
    }
  });


  const barInput = (e) => {
    setInputVal(e.target.value)
  };

  const submit_click = () => {
    setSubmitVal(inputVal);
  };

  const barcodeLoaded = (e)=>{
    setBarcodeSrc(e.target.src)
  };

  return (
    <div className="container text-center mt-5">
      <input type="text" onChange={barInput} value={inputVal} className="input_style" />
      <div className="Sub_btn my-4">
        <button className="btn btn-dark" disabled={inputVal === ''} onClick={submit_click} >Submit</button>
      </div>
      <img ref={inputRef} alt="barcode" id="barCodeImg" onLoad={barcodeLoaded}/>
      <div className="download_Print text-center mt-4">
        <PrintDownload imgUrl={barcodesrc} childVal={submitVal} />
      </div>
    </div>
  )
}
