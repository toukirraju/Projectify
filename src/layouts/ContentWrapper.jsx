import React from 'react'

const ContentWrapper = ({ children, title }) => {

    return (
        <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
            {children}
        </div>
    )
}

export default ContentWrapper
