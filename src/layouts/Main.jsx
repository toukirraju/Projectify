import React from 'react'

const Main = ({ children }) => {
    return (
        <main className="flex-1 overflow-y-auto overflow-x-hidden">
            {children}
        </main>
    )
}

export default Main
