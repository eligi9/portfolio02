import '/css/App.scss'
import ProjectView from '/components/project/ProjectView'
import { useDispatch, useSelector } from 'react-redux'
import { getProject } from '/state/projectSlice'
import { useEffect } from 'react'

function App() {
  //const [count, setCount] = useState(0)

  const dispatch = useDispatch()
  const currentProject = useSelector((state) => state.project.project)
  console.log(currentProject)

  useEffect(() => {
    dispatch(getProject())
    console.log(currentProject)
  },[])

  return (
    <> 
      <ProjectView type={currentProject? currentProject.type:""} name={currentProject? currentProject.name:""}></ProjectView>
      <button onClick={() => dispatch(getProject("easyjam"))}>Get EasyJam</button>
      <button onClick={() => dispatch(getProject("riss"))}>Get Riss</button>
    </>
  )
}

export default App
