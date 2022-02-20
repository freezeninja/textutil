import React, { useEffect, useState } from 'react'
import InputImgBox from './reusable/InputImgBox'
import PrintDownload from './reusable/PrintDownload';

export default function QrCode() {
    const [childVal, setChildVal] = useState('Demo Qr code');
    const [imgUrl, setImgUrl] = useState('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Demo%20Qr%20code');
    const [isLoading, setLoading] = useState(false)

    const Parentval = (val) => {
        // console.log(val);
        setChildVal(val);
    };
    useEffect(() => {
        async function callback() {
            setLoading(true);
            await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${childVal}`)
                .then((res) => {
                    setImgUrl(res.url)
                })
            setLoading(false);
        }
        callback()
    }, [childVal])



    return (
        <div className="container">
            <InputImgBox Parentval={Parentval} imgUrl={imgUrl} isLoading={isLoading} />
            {
                !isLoading && <div className="download_Print text-center mt-4">
                <PrintDownload imgUrl={imgUrl} childVal={childVal}/>
            </div>
            }
        </div>
    )
}