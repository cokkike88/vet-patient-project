import { useState, useEffect } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import PatientList from './components/PatientList'

function App() {

  const [patients, setPatients] = useState([])
  const [patient, setPatient] = useState({})

  useEffect(() => {
    const getLocalStorate = () => {
      const data = JSON.parse(localStorage.getItem('patients')) ?? [];
      console.log(data)
      setPatients(data)        
    }    
    getLocalStorate()
    return () => {}
  }, [])

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients))
  }, [patients])

  const deletePatient = (id) => {
    setPatients(prevStatus => prevStatus.filter(x => x.id !== id))
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <PatientList patients={patients} setPatient={setPatient} deletePatient={deletePatient} />
      </div>

    </div>
  )
}

export default App
