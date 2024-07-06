import React from 'react'
import { Navigate } from 'react-router-dom'

interface SecureProp {
    children: React.ReactNode
}

function SecureRoute({ children }: SecureProp) {

    const Name = localStorage.getItem("name")
    const phoneNumber = localStorage.getItem("phone Number")
    const Email = localStorage.getItem("email")

    if (!Name && !phoneNumber && !Email) {
        return <Navigate to={"/"} state={{ message: "Please fill the form details first." }} />
    }

    return (
        <div>{children}</div>
    )
}

export default SecureRoute