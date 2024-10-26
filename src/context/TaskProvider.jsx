import { createContext, useContext, useReducer } from 'react'

export const TaskContext = createContext()



const initialState = {
  showModal: false,
  tasks: [],
  formData: {
    taskName: '',
    description: '',
    dueDate: '',
    category: '',
    type: 'add'
  },
  sortOn: {
    field: 'taskName',
    order: 'asc'
  },
  searchTerm: ''

}

const reducer = (state, action) => {
  switch (action.type) {
    case "addTask":
      const task = action.payload
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            ...task,
            id: crypto.randomUUID()
          }
        ]
      }

    case 'setFormData':
      const formData = action.payload
      return {
        ...state,
        formData
      }

    case "deleteTask":
      const id = action.payload
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== id)
      }

    case "editTask":
      const updatedTask = action.payload
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === updatedTask.id) {
            return updatedTask
          }
          return task
        })
      }

    case "toggleModal":
      return {
        ...state,
        showModal: !state.showModal
      }

    case "sortTasks":
      const { field, order } = action.payload

      console.log(field, order)
      const sortedTasks = [...state.tasks].sort((a, b) => {
        if (order === 'asc') {
          return a[field] > b[field] ? 1 : -1
        } else {
          return a[field] < b[field] ? 1 : -1
        }
      })
      return {
        ...state,
        tasks: sortedTasks,
        sortOn: {
          field,
          order
        }
      }

    case "searchTerm":
      const search = action.payload
      return {
        ...state,
        searchTerm: search
      }



    default:
      return state
  }

}

const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  )
}

export default TaskProvider



export const useTasks = () => {
  const { state, dispatch } = useContext(TaskContext)

  return [state, dispatch]
}
