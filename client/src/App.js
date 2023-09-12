import { useState } from 'react'

import Topbar from './components/Topbar'
import Presentation from './components/Presentation'
import ProgressGallery from './components/ProgressGallery'
import Footer from './components/Footer'
import Modal from './components/Modal'
import SimulationForm from './components/SimulationForm'
import Loading from './components/Loading'

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState (false);
  const [isLoading, setLoading] = useState (false);

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
        <SimulationForm setLoading={setLoading} />
      </Modal>
      <Loading isLoading={isLoading} />
    </div>
  );
}
