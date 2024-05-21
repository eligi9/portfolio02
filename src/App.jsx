import { useState } from 'react'
import reactLogo from '/assets/react.svg'
import GridContainer from '/grid/GridContainer'
import GridItem from '/grid/GridItem'
import viteLogo from '/vite.svg'
import '/css/App.scss'
import Project from '/components/project/Project'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <GridContainer cols="9" rows="9" color="green">
        <GridItem rows="2/9" cols="2/9" color="red">
          <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
        </GridItem>
      </GridContainer>
      <GridContainer cols="9" rows="9" color="black">
        <GridItem rows="1/10" cols="2/9">
          <Project type="React"></Project>
        </GridItem>

      </GridContainer>
    </>
  )
}

export default App
