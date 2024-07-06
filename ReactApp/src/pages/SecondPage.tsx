// import React from 'react'

import { useEffect, useState } from "react"
import { Typography } from "@mui/material"
import Component1 from "../components/Component1"
import Component2 from "../components/Component2";

interface InfoType {
    userId: number;
    id: number;
    title: string;
    body: string;
}


function SecondPage() {

    const [info, setInfo] = useState<InfoType[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    const GetData = async () => {
        try {
            setLoading(true)
            const data = await fetch("https://jsonplaceholder.typicode.com/posts")
            const result = await data.json();
            setInfo(result)
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
        // console.log("result", info)
    }


    // console.log("data", info)

    useEffect(() => {
        GetData()
    }, [])



    return (
        <>

            {
                loading ?
                    <div className="center2">
                        <Typography variant="h3" gutterBottom>
                            Loading...
                        </Typography>
                    </div>
                    :
                    <>
                        <div className="center">
                            <Typography variant="h4" sx={{ marginTop: 2, marginBottom: 2 }}>
                                Component1
                            </Typography>

                            <Component1 data={info} />

                            <Component2 />
                        </div>
                    </>
            }



        </>
    )
}

export default SecondPage