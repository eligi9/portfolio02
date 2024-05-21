import GridContainer from '/grid/GridContainer'
import GridItem from '/grid/GridItem'

import '/css/App.scss'
import Project from '/components/project/Project'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <GridContainer cols="9" rows="9" color="red">
        <GridItem rows="1/10" cols="2/9">
          <Project type="React"></Project>
        </GridItem>

      </GridContainer>
    </>
  )
}

export default App
