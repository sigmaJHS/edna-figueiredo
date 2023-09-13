import { useState, useEffect } from 'react'

import Topbar from './components/Topbar'
import Presentation from './components/Presentation'
import ProgressGallery from './components/ProgressGallery'
import Footer from './components/Footer'
import Modal from './components/Modal'
import SimulationForm from './components/SimulationForm'
import Loading from './components/Loading'
import Notification from './components/Notification'

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState (false);
  const [isLoading, setLoading] = useState (false);
  const [notification, setNotification] = useState (
    {
      'isOpen': false,
      'message': '',
      'status': ''
    }
  );

  useEffect(
    function () {
      if(isModalOpen || isLoading) {
        document.body.style.overflow = "hidden";
      }else{
        document.body.style.overflow = null;
      }
    },
    [isModalOpen, isLoading]
  );
  
  function toggleModalOpen () {
    setIsModalOpen(!isModalOpen);
  }

  function closeNotification (status, message) {
    setNotification (
      {
        'isOpen': false,
        'message': message,
        'status': status
      }
    );
  }

  function triggerNotification (status, message) {
    setNotification (
      {
        'isOpen': true,
        'message': message,
        'status': status
      }
    )

    setIsModalOpen(false);

    setTimeout (
      function () {
        closeNotification(status, message);
      },
      5000
    )
  }

  return (
    <div>
      <Topbar />
      <Presentation
        toggleModal={toggleModalOpen}
      />
      <ProgressGallery />
      <Footer />
      <Modal
        isOpen={isModalOpen}
        toggle={toggleModalOpen}
      >
        <SimulationForm
          setLoading={setLoading}
          triggerNotification={triggerNotification}
        />
      </Modal>
      <Loading isLoading={isLoading} />
      <Notification
        isOpen={notification.isOpen}
        close={closeNotification}
        message={notification.message}
        status={notification.status}
      />
    </div>
  );
}
