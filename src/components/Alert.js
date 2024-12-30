import React from 'react'

export default function Alert(props) {
    if (!props.alert) {
        return null; // If no alert, return nothing
        }

    const capatalized=(word)=>{
        const lower =  word.toLowerCase()
        return lower[0].toUpperCase() + lower.slice(1)
    }

    return (

        <>
        <div className={`alert alert-${props.alert.kind} d-flex justify-content-between align-items-center`} role="alert">
            <span className="mx-auto"><strong>{capatalized(props.alert.kind)}</strong>: {props.alert.msg}</span>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        </>
    )
}
