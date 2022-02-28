import React, {useState} from 'react';
import CopyText from './reusable/CopyText';
import  arrowup from '../assest/arrow-up.svg';
import  arrowdown from '../assest/arrow-down.svg';
import  arrowleft from '../assest/arrow-left.svg';
import  arrowright from '../assest/arrow-right.svg';
import  arrowdownleft from '../assest/arrow-down-left.svg';
import  arrowdownright from '../assest/arrow-down-right.svg';
import  arrowupleft from '../assest/arrow-up-left.svg';
import  arrowupright from '../assest/arrow-up-right.svg';

export default function GenerateColor({propAlert}) {
    const [colors, setColors] = useState(['#000000','#9b2626']);
    const [background, setBackground] = useState('linear-gradient(to top, #9b2626, #000000)');
    const [isDiaabled, setDisabled] = useState(false);
    const [activeBtn, setActiveBtn] = useState({
        activeId: 0,
        value: 'to top'
    })
    const buttons = [
        {
            direction: 'to top',
            icon: arrowup
        },
        {
            direction: 'to left',
            icon: arrowleft
        },
        {
            direction: 'to bottom',
            icon: arrowdown
        },
        {
            direction: 'to right',
            icon: arrowright
        },
        {
            direction: 'to top right',
            icon: arrowupright
        },
        {
            direction: 'to top left',
            icon: arrowupleft
        },
        {
            direction: 'to bottom right',
            icon: arrowdownright
        },
        {
            direction: 'to bottom left',
            icon: arrowdownleft
        }
    ];

    const color_submit = () => {
         setBackground(`linear-gradient(${activeBtn.value}, ${colors.join()}`)
    };

    const color_submit_toggle = ()=>{
        setBackground(`linear-gradient(${activeBtn.value}, ${colors.reverse().join()}`)
    }

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

    const colorValueChange = ()=>{
        let inputs = document.querySelectorAll('.per_color_input');
        const input_values = [...inputs].map(e => e.value);
         setColors(input_values);
    }

    return (
        <>
            <div className="container color_container text-center mt-5">
                <button className="Cust_btn mb-3" disabled={isDiaabled}  onClick={addColorPlate}>Add more color plate</button>
                <div className="color_box d-flex justify-content-center">
                    {
                        colors.map((e, i) => {
                            return <div className="color_inputs" key={i}>
                                <input type="color" name={`color${i}`} className="per_color_input" id={`${i}`} value={e} onChange={colorValueChange}/>
                            </div>
                        })
                    }
                </div>
                <div className="direction_button d-flex justify-content-center mt-3">
                    {
                        buttons.map((e,i)=>{
                            return <div key={i}>
                                <button className={`Cust_btn ${activeBtn.activeId === i && 'active'}`}>
                                  <img src={e.icon} alt="avg" id={e.direction}  onClick={directionClicked.bind(this, i)}/>
                                </button>
                            </div>
                        })
                    }
                </div>
                <button className="btn btn-warning m-3" onClick={color_submit}>Genarate Code </button>
                <button className="btn btn-success m-3" onClick={color_submit_toggle}>Toggle colors</button>
                <div className="preview d-flex my-3 justify-content-center">
                     <p className="Preview_para">Preview</p>
                    <div className="preview_box" style={{background: background}}></div>
                </div>
                <div className="copy_color">
                   {
                        background.length !== 0 &&  <CopyText alert={propAlert} textvalue={background} name="Copy Color Code"/>
                   } 
                </div>
            </div>
        </>
    )
}
