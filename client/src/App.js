import Topbar from './components/Topbar'
import Presentation from './components/Presentation'
import ProgressGallery from './components/ProgressGallery'
import Footer from './components/Footer'
import Modal from './components/Modal'
import SimulationForm from './components/SimulationForm'

export default function App() {
  return (
    <div>
      <Topbar />
      <Presentation />
      <ProgressGallery />
      <Footer />
      <Modal>
        <SimulationForm />
      </Modal>
    </div>
  );
}
