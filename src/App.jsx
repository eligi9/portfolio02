import '/css/App.scss'
import ProjectView from '/components/project/ProjectView'
import Header from '/components/navigation/Header'

import { useSelector } from 'react-redux'


import { useDisclosure } from '@mantine/hooks'
import Menue from '/components/navigation/Menue.jsx'
import Home from '/components/views/Home.jsx'
import Projects from '/components/views/Projects.jsx'
import Footer from '/components/footer/Footer'
import Imprint from '/components/footer/Imprint'
import PrivatPolicy from '/components/footer/PrivatPolicy'
import { useEffect } from 'react'

function App() {
  const currentSection = useSelector((state) => state.currentSection.currentSection);


  const [menueOpened, menueHandlers] = useDisclosure(false);

  const toggleMenu = () => {
    menueHandlers.toggle()
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentSection])


  return (
    <>
      <Header onClick={toggleMenu}/>
      <main>
        {currentSection === "home" && <Home/>}
        {currentSection === "Xproject" && <ProjectView />}
        {currentSection === "project" && <Projects></Projects>}
        {currentSection === "privatpolicy" && <PrivatPolicy/>}
        {currentSection === "imprint" && <Imprint/>}
        {menueOpened && <Menue onClick={toggleMenu}/>}
      </main>
      <Footer/>
    </>
  )
}

export default App
