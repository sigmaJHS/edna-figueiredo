import { useState } from 'react'

import Topbar from './components/Topbar'
import Presentation from './components/Presentation'
import ProgressGallery from './components/ProgressGallery'
import Footer from './components/Footer'
import Modal from './components/Modal'
import SimulationForm from './components/SimulationForm'

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState (false);

  function toggleModalOpen () {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div>
      <Topbar />
      <Presentation toggleModal={toggleModalOpen} />
      <ProgressGallery />
      <Footer />
      <Modal isOpen={isModalOpen} toggle={toggleModalOpen}>
        <SimulationForm />
      </Modal>
    </div>
  );
}
