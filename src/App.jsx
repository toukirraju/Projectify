import { useReducer } from "react"
import SortIcon from "./assets/SortIcon"
import Card from "./components/Card"
import ContainerHeader from "./components/ContainerHeader"
import Sidebar from "./components/Sidebar"
import TopNav from "./components/TopNav"
import Container from "./layouts/Container"
import Content from "./layouts/Content"
import ContentHeader from "./layouts/ContentHeader"
import ContentWrapper from "./layouts/ContentWrapper"
import Contents from "./layouts/Contents"
import Main from "./layouts/Main"
import TaskProvider from "./context/TaskProvider"
import Projects from "./components/Projects"


function App() {


  return (
    <TaskProvider>
      <div className="bg-gray-900 text-white">
        <div className="flex h-screen">
          {/* <!-- Sidebar --> */}
          <Sidebar />

          {/* <!-- Main ContentWrapper --> */}
          <Main>
            {/* <!-- Top Bar --> */}
            <TopNav />

            {/* <!-- Project ContentWrapper --> */}
            <Container>
              <ContainerHeader />
              <Contents>
                <Projects />
              </Contents>
            </Container>
          </Main>
        </div>
      </div>
    </TaskProvider>
  )
}

export default App
