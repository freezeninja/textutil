import React from 'react'

export default function CopyText({alert, textvalue, name}) {
    const copy_txt = ()=>{
        navigator.clipboard.writeText(textvalue);
        alert('to clickboard','copied');
    }
  return (
    <span className="copy" onClick={copy_txt}>{name}</span>
  )
}
