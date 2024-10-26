import React from 'react'

const FormInput = ({
    id,
    name,
    type,
    label,
    ...props
}) => {
    return (
        <div className="mb-4">
            <label
                htmlFor={id}
                className="mb-1 block text-sm font-medium text-gray-300"
            >{label}</label>
            <input
                type={type}
                id={id}
                name={name}
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                {...props}
            />
        </div>
    )
}

export default FormInput
