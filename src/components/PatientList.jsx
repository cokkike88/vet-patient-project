import { useEffect } from "react"
import Patient from "./Patient"

const PatientList = ({patients, setPatient, deletePatient}) => {

  useEffect(() => {
    if(patients.length > 0)
      console.log('New patient was added')
  }, [patients])

  const renderPatients = () => {
    return patients.map(patient => (
      <Patient 
        key={patient.id}
        patient={patient}
        setPatient={setPatient}
        deletePatient={deletePatient}
      />
    ))

  }

  const PatientHeader = ({title, subTitle1, subTitle2}) => {
    return (
      <>
        <h2 className="font-black text-3xl text-center">{title}</h2>
        <p className="text-xl mt-5 mb-10 text-center">
          {subTitle1} {''}
          <span className="text-indigo-600 font-bold">{subTitle2}</span>
        </p>
      </>
    )
  }

  return (
    <div className="md:w-1/2 lg:w-3/5">
      {patients && patients.length > 0? (
        <>
          <PatientHeader title='Listado de pacientes' subTitle1='Administra tus' subTitle2='pacientes y citas' />          
          {renderPatients()}
        </>        
      ): <PatientHeader title='No hay pacientes' subTitle1='Comienza agregando pacientes' subTitle2='y apareceran en este lugar'/>}
      <div className="md:h-screen overflow-y-scroll">
      </div>
      
    </div>
  )
}

export default PatientList
