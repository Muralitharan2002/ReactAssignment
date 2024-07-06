// import React from 'react'
import { Box, Typography, TextField, Button, Alert } from "@mui/material"
import "../App.css"
import React, { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"

function FirstPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const [error, setError] = useState(location.state?.message);

    // const Error = location.state?.message
    const [Name, setName] = useState<string>("")
    const [PhNumber, setPhNumber] = useState("")
    const [Email, setEmail] = useState<string>("")

    const name = localStorage.getItem("name")
    const phoneNumber = localStorage.getItem("phone Number")
    const email = localStorage.getItem("email")


    if (error) {
        setTimeout(() => {
            setError("");
        }, 3000);
    }
    // }, [error]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (Name.length <= 2) {
            setError("Name must be greater than 2 letters.");
            return;
        }
        if (PhNumber.length !== 10) {
            setError("Phone number must be exactly 10 digits.");
            return;
        }
        // console.log({ Name, PhNumber, Email })
        localStorage.setItem("name", Name)
        localStorage.setItem("phone Number", PhNumber)
        localStorage.setItem("email", Email)

        navigate("/secondpage")
    }

    return (
        <>

            <div className="container">
                <Box component={"form"} onSubmit={handleSubmit} noValidate={false} sx={{ width: 350, height: 400, borderRadius: 4, padding: 1 }}>
                    <Typography variant="h5" sx={{ marginBottom: 2, textAlign: "center" }} gutterBottom>
                        User Form
                    </Typography>

                    <TextField
                        label="Name"
                        name="name"
                        className="textfield"
                        sx={{ width: "100%" }}
                        value={Name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <TextField
                        type="number"
                        label="Phone number"
                        name="Phone number"
                        className="textfield"
                        sx={{ width: "100%", marginTop: 2 }}
                        value={PhNumber}
                        onChange={(e) => setPhNumber(e.target.value)}
                        required
                    />

                    <TextField
                        type="email"
                        label="Email"
                        name="email"
                        className="textfield"
                        sx={{ width: "100%", marginTop: 2 }}
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <Button type="submit"
                        fullWidth
                        variant="contained" sx={{ marginTop: 3 }}>
                        submit
                    </Button>

                    <Link to={"/secondpage"}>
                        <Button variant="outlined" fullWidth sx={{ marginTop: 2 }}>
                            Go to SecondPage
                        </Button>
                    </Link>

                    {
                        error && !name && !phoneNumber && !email &&
                        <Alert severity="warning" sx={{ marginTop: 2 }}>
                            {error}
                        </Alert>


                    }

                </Box>
            </div>
        </>
    )
}

export default FirstPage