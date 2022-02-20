import React, { useState } from 'react'
import Loader from './Loader';

export default function InputImgBox({ Parentval, imgUrl, isLoading }) {
    const [input_val, setInput_val] = useState('Demo Qr code')
    const Valuechange = (event) => {
        let stringVal = `${event.target.value}`
        setInput_val(stringVal);
    }
    const Inputval = () => {
        Parentval(input_val)
    }
    return (
        <>
            <div className="text-center whole_input_box mt-5">
                <input type="text" onChange={Valuechange} value={input_val} className="input_style"/>
                <div className="Sub_btn my-4">
                    <button className="btn btn-dark" disabled={input_val === ''} onClick={Inputval}>Submit</button>
                </div>
                {
                    isLoading && <div className="inputLoader mt-3">
                        <Loader />
                    </div>
                }
                {!isLoading && <div className="Qr_img">
                    <img src={imgUrl} alt="Qr_Code" />
                </div>
                }
            </div>
        </>
    )
}
