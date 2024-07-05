import { Outlet } from "react-router-dom"
import HostHeader from './HostHeader.jsx'

export default function HostLayout(){
    return (
        <>
            <HostHeader/>
            <Outlet/>
        </>
    )
}