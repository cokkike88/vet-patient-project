import React from 'react'

const Error = ({children}) => {
  return (
    <div className="bg-red-800 shadow-md text-white p-3 uppercase font-bold mb-3 text-center rounded-lg">
        {children}
    </div>
  )
}

export default Error
