import React from 'react'

const FormSelect = ({
    label,
    id,
    name,
    children,
    ...props
}) => {
    return (
        <div className="mb-4">
            <label
                htmlFor={id}
                className="mb-1 block text-sm font-medium text-gray-300"
            >{label}</label>
            <select
                id={id}
                name={name}
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                {...props}
            >
                {children}
            </select>
        </div>
    )
}

export default FormSelect
