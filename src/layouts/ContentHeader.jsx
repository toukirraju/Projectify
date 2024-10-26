import React from 'react'

const ContentHeader = ({ children, title, count }) => {
    return (
        <div className="mb-2 flex items-center justify-between">
            <h3 className="text-lg font-semibold">{title} ({count})</h3>
            {children}
        </div>
    )
}

export default ContentHeader
