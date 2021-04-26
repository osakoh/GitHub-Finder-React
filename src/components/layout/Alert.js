import React from 'react'

const Alert = ({ alert }) => {
    return (
        // if alert is not null, show the div
        alert !== null && (
            <div className={`alert alert-${alert.type}`}>
                <i className="fas fa-info-circle"> {alert.msg}</i>
            </div>
        )
    )
}

export default Alert;

// racf -> functional component
// rce: class based component that exports at the bottom 