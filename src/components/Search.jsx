import React from 'react'
import { useTasks } from '../context/TaskProvider'

const Search = () => {
    const [state, dispatch] = useTasks()

    return (
        <div className="mx-4 flex-1">
            <input
                type="text"
                placeholder="Search here"
                className="w-full max-w-xl rounded-full bg-gray-700 px-4 py-2 text-white focus:outline-none"
                value={state.searchTerm}
                onChange={(e) => {
                    dispatch({
                        type: "searchTerm",
                        payload: e.target.value
                    })
                }}
            />
        </div>
    )
}

export default Search
