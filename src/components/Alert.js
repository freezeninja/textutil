import React from 'react';

export default function Alert(props) {
    const Capitalize = (msg) =>{
        return msg.charAt(0).toUpperCase() + msg.slice(1);
    };
    return (
     props.alert &&
        <>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{Capitalize(props.alert.smTxt)} ! </strong> {props.alert.msg}
            </div>
        </>
    );
}
