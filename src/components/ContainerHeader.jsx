import React, { useContext } from 'react'
import AddIcon from '../assets/AddIcon'
import Modal from './Modal'
import Form from './Form'
import FormInput from './FormInput'
import FormTextarea from './FormTextarea'
import FormSelect from './FormSelect'
import { useTasks } from '../context/TaskProvider'


const ContainerHeader = () => {
    const [state, dispatch] = useTasks()
    const { formData, showModal } = state || {}

    const handleChange = (e) => {
        dispatch({
            type: "setFormData",
            payload: {
                ...formData,
                [e.target.name]: e.target.value,
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formData.type !== "edit") {
            dispatch({
                type: "addTask",
                payload: formData
            })
        } else {
            dispatch({
                type: "editTask",
                payload: formData
            })
        }
        // clear form
        dispatch({
            type: "setFormData",
            payload: {
                taskName: '',
                description: '',
                dueDate: '',
                category: ''
            }
        })

        dispatch({
            type: "toggleModal",
            payload: false
        })
    }
    return (
        <>
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold">Projectify</h2>
                <div className="flex space-x-2">
                    <button
                        className="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white"
                        onClick={() =>
                            dispatch({
                                type: "toggleModal",
                                payload: !showModal
                            })
                        }
                    >
                        <AddIcon />
                        Add
                    </button>

                </div>
            </div>

            <Modal open={showModal} onClose={() => {
                dispatch({
                    type: "toggleModal",
                    payload: false
                })
            }} >
                <div className="p-6">
                    <h2 className="mb-6 text-2xl font-bold text-green-400">Create Task</h2>
                    <Form onSubmit={handleSubmit}>
                        <FormInput
                            label="Task Name"
                            id="taskName"
                            name="taskName"
                            type="text"
                            onChange={handleChange}
                            value={formData.taskName}
                            required
                        />
                        <FormTextarea
                            label="Description"
                            id="description"
                            name="description"
                            rows="3"
                            onChange={handleChange}
                            value={formData.description}
                        />
                        <FormInput
                            label="Due Date"
                            id="dueDate"
                            name="dueDate"
                            type="date"
                            onChange={handleChange}
                            value={formData.dueDate}
                        />

                        <FormSelect
                            label="Category"
                            id="category"
                            name="category"
                            required
                            onChange={handleChange}
                            value={formData.category}
                        >
                            <option value="">select category</option>
                            <option value="todo">To-Do</option>
                            <option value="inprogress">On Progress</option>
                            <option value="done">Done</option>
                            <option value="revised">Revised</option>
                        </FormSelect>

                        <div className="flex justify-end space-x-3">
                            <button
                                type="button"
                                className="rounded-md border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                                onClick={() => {
                                    dispatch({
                                        type: "toggleModal",
                                        payload: false
                                    })
                                }}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                            >
                                Create Task
                            </button>
                        </div>
                    </Form>
                </div>
            </Modal>

        </>
    )
}

export default ContainerHeader
