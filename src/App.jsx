import Navbar from "./Componants/Navbar"
import { ProfileSection } from "./Componants/ProfileSection"
import { About } from "./Componants/About"
import Projects from "./Componants/Projects"
import Skills from "./Componants/Skills"
import Award from "./Componants/Award"
import Testimonials from "./Componants/Testimonials"
import ContactForm from "./Componants/ContactForm"
import Footer from "./Componants/Footer"
const App = () => {
  return (
    <div className="text-gray-200 antialiased tracking-tighter overflow-x-hidden bg-black">
      <Navbar />
      <ProfileSection />
      <About />
      <Projects />
      <Skills />
      <Award />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App