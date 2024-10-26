import React from 'react'
import ContentWrapper from '../layouts/ContentWrapper'
import Content from '../layouts/Content'
import ContentHeader from '../layouts/ContentHeader'
import SortIcon from '../assets/SortIcon'
import Card from './Card'
import { useTasks } from '../context/TaskProvider'
import NoDataFound from './NoDataFound'

const Projects = () => {
    const [state, dispatch] = useTasks()

    const { tasks, searchTerm } = state || {}

    // if search term is empty then return all tasks else return filtered tasks
    const filteredTasks = tasks.filter(task => task?.taskName?.toLowerCase().includes(searchTerm?.toLowerCase()))



    const todo = filteredTasks.filter(task => task.category === "todo")
    const onProgress = filteredTasks.filter(task => task.category === "inprogress")
    const done = filteredTasks.filter(task => task.category === "done")
    const revised = filteredTasks.filter(task => task.category === "revised")

    const toggleSort = (field) => {
        // toggle sort if already sorted on the same field with asc then it will change to desc and vice versa
        let order = state.sortOn.field === field && state.sortOn.order === "asc" ? "desc" : "asc"
        dispatch({
            type: "sortTasks",
            payload: {
                field,
                order
            }
        })
    }

    return (
        <>
            {/* <!-- Todo --> */}
            <ContentWrapper>
                <Content color="indigo">
                    <ContentHeader title="Todo" count={todo.length || 0} >
                        <SortIcon onClick={() => {
                            toggleSort("dueDate")
                        }} />
                    </ContentHeader>
                    {/* <Card color="indigo" /> */}
                    {
                        todo.length > 0 ? todo.map((task, index) => (
                            <Card color="indigo" key={index} task={task} />
                        )) : <NoDataFound />
                    }

                </Content>
            </ContentWrapper>

            {/* <!-- On Progress --> */}
            <ContentWrapper>
                <Content color="yellow">
                    <ContentHeader title="On Progress" count={onProgress.length || 0} >
                        <SortIcon onClick={() => {
                            toggleSort("dueDate")
                        }} />
                    </ContentHeader>
                    {/* <Card color="yellow" /> */}
                    {
                        onProgress.length > 0 ? onProgress.map((task, index) => (
                            <Card color="yellow" key={index} task={task} />
                        )) : <NoDataFound />
                    }
                </Content>
            </ContentWrapper>

            {/* <!-- Done --> */}
            <ContentWrapper>
                <Content color="teal">
                    <ContentHeader title="Done" count={done.length || 0} >
                        <SortIcon onClick={() => {
                            toggleSort("dueDate")
                        }} />
                    </ContentHeader>
                    {/* <Card color="teal" /> */}
                    {
                        done.length > 0 ? done.map((task, index) => (
                            <Card color="teal" key={index} task={task} />
                        )) : <NoDataFound />
                    }
                </Content>
            </ContentWrapper>

            {/* <!-- Revised --> */}
            <ContentWrapper>
                <Content color="rose">
                    <ContentHeader title="Revised" count={revised.length || 0} >
                        <SortIcon onClick={() => {
                            toggleSort("dueDate")
                        }} />
                    </ContentHeader>
                    {/* <Card color="rose" /> */}
                    {
                        revised.length > 0 ? revised.map((task, index) => (
                            <Card color="rose" key={index} task={task} />
                        )) : <NoDataFound />
                    }
                </Content>
            </ContentWrapper>
        </>
    )
}

export default Projects
