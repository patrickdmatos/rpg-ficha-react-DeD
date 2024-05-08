import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Admin() {
    return (
        <React.Fragment>
            <Outlet />
        </React.Fragment>
    )
}