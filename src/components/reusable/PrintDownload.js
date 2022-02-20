import React from 'react'

export default function PrintDownload({ imgUrl, childVal }) {
    const downloadQrBar = async () => {
        const originalImg = await fetch(imgUrl);
        const blob_img = await originalImg.blob();
        const imgUrl_link = URL.createObjectURL(blob_img);
        const a = document.createElement('a');
        a.href = imgUrl_link;
        a.download = childVal;
        // document.body.appendChild(a);
        a.click();
        // document.body.removeChild(a);
        URL.revokeObjectURL(imgUrl_link)
    };

    const printQrBar = () => {
        let printImg = window.open('');
        let html = `<!DOCTYPE html><html><head><title>Print ${childVal}</title></head><body><img src=${imgUrl} onload="window.print();window.close()"/></body></html>`
        printImg.document.write(html);
        printImg.focus(); //this for internet explorer
    };
    return (
        <div>
            <div className="Print_dwn_btn d-flex justify-content-center text-center">
                <div className="Dwn_btn">
                    <button className="Cust_btn" onClick={downloadQrBar}>Download</button>
                </div>
                <div className="print_btn">
                    <button className="Cust_btn" onClick={printQrBar}>Print</button>
                </div>
            </div>
        </div>
    )
}
