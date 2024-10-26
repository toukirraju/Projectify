import React from 'react'

const Content = ({ children, color }) => {

    let bg = "bg-indigo-600"
    if (color === "indigo") {
        bg = "bg-indigo-600"
    } else if (color === "yellow") {
        bg = "bg-yellow-500"
    } else if (color === "teal") {
        bg = "bg-teal-500"
    } else if (color === "rose") {
        bg = "bg-rose-500"
    }
    return (
        <div className={`rounded-lg p-4 ${bg}`}>
            {children}
        </div>
    )
}

export default Content
