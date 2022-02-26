import React from 'react'
import { useState } from 'react/cjs/react.development';
import  arrowup from '../assest/arrow-up.svg'

export default function GenerateColor({propAlert}) {
    const [colors, setColors] = useState(['#000000','#9b2626']);
    const [background, setBackground] = useState('linear-gradient(to top, #9b2626, #000000)');
    const [isDiaabled, setDisabled] = useState(false);
    const [activeBtn, setActiveBtn] = useState({
        activeId: 0,
        value: 'to top'
    })
    const buttons = [
        'to top',
        'to left',
        'to bottom',
        'to right'
    ];

    const color_submit = async() => {
        let inputs = document.querySelectorAll('.per_color_input');
        const input_values = [...inputs].map(e => e.value);
        await setColors(input_values);
        await setBackground(`linear-gradient(${activeBtn.value}, ${input_values.reverse().join()}`)
    };

    const addColorPlate = ()=>{
        if(colors.length >= 6){
            propAlert('Cant add more than 6 plate', 'Warning', 'warning', 4000);
            setDisabled(true);
            return
        }
        setColors([...colors, '#000000'])
    };

    const directionClicked = (num, event)=>{  
        let directionValue = event.target.id;
        setActiveBtn({
            activeId: num,
            value: directionValue
        })
    }; 

    return (
        <>
       
            <div className="container text-center mt-5">
                <button className="Cust_btn mb-3" disabled={isDiaabled}  onClick={addColorPlate}>Add more color plate</button>
                <div className="color_box d-flex justify-content-center">
                    {
                        colors.map((e, i) => {
                            return <div className="color_inputs" key={i}>
                                <input type="color" name={`color${i}`} className="per_color_input" id={`${i}`} defaultValue={e} />
                            </div>
                        })
                    }
                </div>
                <div className="direction_button d-flex justify-content-center mt-3">
                    {
                        buttons.map((e,i)=>{
                            return <div key={i}>
                                <button className={`Cust_btn ${activeBtn.activeId === i && 'active'}`}>
                                  <img src={arrowup} alt="avg" id={e}  onClick={directionClicked.bind(this, i)}/>
                                </button>
                            </div>
                        })
                    }
                </div>
                <button className="btn btn-warning mt-3" onClick={color_submit}>Genarate Code</button>
                <div className="preview d-flex my-3 justify-content-center">
                     <p className="Preview_para">Preview</p>
                    <div className="preview_box" style={{background: background}}></div>
                </div>
            </div>
        </>
    )
}
