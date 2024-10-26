import React from 'react'
import EditIcon from '../assets/EditIcon'
import TrashIcon from '../assets/TrashIcon'
import { useTasks } from '../context/TaskProvider'

const Card = ({ color, task }) => {
    let textColor = "text-indigo-600"
    if (color === "indigo") {
        textColor = "text-indigo-600"
    } else if (color === "yellow") {
        textColor = "text-yellow-500"
    } else if (color === "teal") {
        textColor = "text-teal-500"
    } else if (color === "rose") {
        textColor = "text-rose-500"
    }

    const { taskName, description, dueDate, id } = task || {}
    const [_, dispatch] = useTasks()
    return (
        <div className="mb-4 rounded-lg bg-gray-800 p-4">
            <div className="flex justify-between">
                <h4 className={`mb-2 flex-1 font-semibold ${textColor}`}>
                    {taskName}
                </h4>

                <div className="flex gap-2">
                    <TrashIcon onClick={() => {
                        dispatch({
                            type: "deleteTask",
                            payload: id
                        })
                    }} />
                    <EditIcon onClick={() => {
                        dispatch({
                            type: "setFormData",
                            payload: {
                                ...task,
                                type: "edit"
                            }
                        })
                        dispatch({
                            type: "toggleModal",
                            payload: true
                        })
                    }} />
                </div>
            </div>
            <p className="mb-2 text-sm text-zinc-200">
                {description}
            </p>

            <p className="mt-6 text-xs text-zinc-400">
                {dueDate}
            </p>
        </div>
    )
}

export default Card
