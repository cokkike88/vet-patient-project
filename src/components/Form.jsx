import { useState, useEffect } from 'react'
import Error from './Error'

const Form = ({ setPatients, patient, setPatient }) => {

    const [name, setName] = useState('')
    const [owner, setOwner] = useState('')
    const [email, setEmail] = useState('')
    const [releaseDate, setReleaseDate] = useState('')
    const [symthoms, setSymthoms] = useState('')

    const [error, setError] = useState(false)

    useEffect(() => {
        if (Object.keys(patient).length > 0) {
            setName(patient.name)
            setOwner(patient.owner)
            setEmail(patient.email)
            setReleaseDate(patient.releaseDate)
            setSymthoms(patient.symthoms)
        }
    }, [patient])

    const handleSummit = (e) => {
        e.preventDefault()

        //validation of the form
        if ([name, owner, email, releaseDate, symthoms].includes('')) {
            setError(true)
            return
        }

        const formPatient = {            
            name,
            owner,
            email,
            releaseDate,
            symthoms
        }

        //Update
        if (patient.id){
            formPatient.id = patient.id
            setPatients(prevState => prevState.map(x => x.id === patient.id? formPatient: x))
            setPatient({})
        }
        //Create
        else{
            formPatient.id = idGenerator()
            setPatients(prevState => [...prevState, formPatient])
        }        
        setError(false)
        cleanUpStates()
    }

    const cleanUpStates = () => {
        setName('')
        setOwner('')
        setEmail('')
        setReleaseDate('')
        setSymthoms('')
    }

    const idGenerator = () => {
        const random = Math.random().toString(36).substring(2)
        const date = Date.now().toString(36)

        return random + date
    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            <p className="text-lg mt-5 text-center">
                Anade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>
            <form
                onSubmit={handleSummit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mt-10 mb-10">
                {error && <Error><p>Todos los campos son obligatorios</p></Error>}
                <div className="mb-5">
                    <label htmlFor='pet' className="block text-gray-700 uppercase font-bold">Nombre de la mascota</label>
                    <input id='pet'
                        type="text"
                        placeholder='Nombre de la mascota'
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-r-md"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor='owner' className="block text-gray-700 uppercase font-bold">Nombre del propietario</label>
                    <input id='owner'
                        type="text"
                        placeholder='Nombre del propietario'
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-r-md"
                        value={owner}
                        onChange={(e) => setOwner(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label htmlFor='email' className="block text-gray-700 uppercase font-bold">Email</label>
                    <input id='email'
                        type="email"
                        placeholder='Email contacto'
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-r-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label htmlFor='release' className="block text-gray-700 uppercase font-bold">Fecha alta</label>
                    <input id='releaseDate'
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-r-md"
                        value={releaseDate}
                        onChange={(e) => setReleaseDate(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label htmlFor='symthoms' className="block text-gray-700 uppercase font-bold">Sistomas</label>
                    <textarea
                        id='symthoms'
                        className="border-2 w-full p-2 mt-2"
                        placeholder='Describe los sintomas'
                        value={symthoms}
                        onChange={(e) => setSymthoms(e.target.value)} />
                </div>
                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
                    value={patient.id? 'Editar paciente': 'Agregar paciente'} />
            </form>
        </div>
    )
}

export default Form
