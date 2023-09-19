import { useState, useEffect, useContext } from 'react'
import { LoadingContext } from './contexts/LoadingContext'

import Topbar from './components/Topbar'
import Presentation from './components/Presentation'
import ProgressGallery from './components/ProgressGallery'
import Footer from './components/Footer'
import Modal from './components/Modal'
import SimulationForm from './components/SimulationForm'
import Loading from './components/Loading'
import Notification from './components/Notification'

export default function App() {
  const [isLoading, setLoading] = useState (false);
  const [isModalOpen, setIsModalOpen] = useState (false);
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

  function closeNotification () {
    setNotification ({...notification, 'isOpen': false});
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
        closeNotification();
      },
      5000
    );
  }

  return (
    <LoadingContext.Provider value={setLoading}>
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
    </LoadingContext.Provider>
  );
}
