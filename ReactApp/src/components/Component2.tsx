import { Box, Checkbox, Collapse, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { Remove, Add } from '@mui/icons-material';

interface DepartmentType {
    [key: number]: string[]

}

function Component2() {

    const [open, setOpen] = React.useState<number[]>([])
    const [Department, setDepartment] = React.useState<number[]>([])
    const [SubDepartment, setSubDepartment] = React.useState<DepartmentType>([])
    // console.log(Department, SubDepartment)

    const handleClick = (id: number) => {
        setOpen(open.includes(id) ? open.filter((index) => id !== index) : [...open, id]);
        // setTargetId([...targetID, id]);
    };

    const handleDepartmentCheck = (id: number) => {
        if (Department?.includes(id)) {
            setDepartment(
                Department.filter((index) => id !== index)
            )
            setSubDepartment(prev => {
                const newState = { ...prev };
                delete newState[id]
                return newState;
            })
        } else {
            setDepartment([...Department, id])
            setSubDepartment(prev => ({
                ...prev,
                [id]: department[id].sub_departments
            }));
        }
    }

    const handleSubDepartmentCheck = (id: number, subitem: string) => {
        setSubDepartment(prev => {
            const newSubDepartment = prev[id] || [];
            if (newSubDepartment.includes(subitem)) {
                const updatedDepartment = newSubDepartment.filter(item => item != subitem)
                if (updatedDepartment.length < department[id].sub_departments.length) {
                    setDepartment(Department.filter(item => item != id))
                }
                return {
                    ...prev,
                    [id]: updatedDepartment
                }
            } else {
                const updatedDepartment = [...newSubDepartment, subitem]
                if (updatedDepartment.length === department[id].sub_departments.length) {
                    setDepartment([...Department, id])
                }
                return {
                    ...prev,
                    [id]: updatedDepartment
                }
            }

        })
    }

    const department = [
        {
            department: "customer_service",
            sub_departments: [
                "support",
                "customer_success"
            ]
        },
        {
            department: "design",
            sub_departments: [
                "graphic_design",
                "product_design",
                "web_design"
            ]
        }
    ]


    return (
        <Box sx={{ marginBottom: 5, width: "80%" }}>
            <Typography variant='h4' sx={{ textAlign: "center" }}>
                Component2
            </Typography>

            {
                department.map((item, index) => (

                    <List key={index} >

                        <ListItem sx={{ display: "flex", alignItems: "center", justifyContent: "center", cursor: "default" }}>
                            {(open.includes(index)) ? <Remove /> : <Add />}
                            <Checkbox checked={Department.includes(index)} onChange={() => handleDepartmentCheck(index)} />
                            <ListItemText primary={item.department} onClick={() => handleClick(index)} />
                        </ListItem>
                        <Collapse in={open.includes(index)} >
                            {
                                item.sub_departments.map((subitem, subindex) => (
                                    <List key={subindex} component="div" disablePadding>
                                        <ListItem sx={{ pl: 8, cursor: "default" }} onClick={() => { handleSubDepartmentCheck(index, subitem) }}>
                                            <Checkbox checked={SubDepartment[index]?.includes(subitem) || false}
                                            />
                                            <ListItemText primary={subitem} />
                                        </ListItem>
                                    </List>
                                ))
                            }
                        </Collapse>
                    </List>

                ))
            }

        </Box>

    )
}

export default Component2