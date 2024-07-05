import { NavLink } from "react-router-dom"

export default function HostDetailHeader(){
    const styles = {
        fontWeight: 'bold', 
        textDecoration: 'underline', 
        color: '#161616'
    }

    return (
        <nav className="host-van-detail-nav">
            <NavLink end to='.' style={({isActive}) => isActive ? styles : null}>Details</NavLink>
            <NavLink to='pricing' style={({isActive}) => isActive ? styles : null}>Pricing</NavLink>
            <NavLink to='photos' style={({isActive}) => isActive ? styles : null}>Photos</NavLink>
        </nav>
    )
}