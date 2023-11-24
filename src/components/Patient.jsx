
const Patient = ({ patient, setPatient, deletePatient }) => {

    const {id} = patient

    return (
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre {''}
                <span className="font-normal normal-case">{patient.name}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Propientario {''}
                <span className="font-normal normal-case">{patient.owner}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Email {''}
                <span className="font-normal normal-case">{patient.email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Fecah alta {''}
                <span className="font-normal normal-case">{patient.releaseDate}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas {''}
                <span className="font-normal normal-case">{patient.symthoms}</span>
            </p>
            <div className="flex justify-between">
                <button 
                    type="button" 
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                    onClick={() => setPatient(patient)}>
                        Editar
                </button>
                <button 
                type="button" 
                className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                onClick={() => deletePatient(id)}>
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default Patient
