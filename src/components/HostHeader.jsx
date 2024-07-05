import { NavLink } from "react-router-dom"

export default function Header(){
    const styles = {
        fontWeight: 'bold', 
        textDecoration: 'underline', 
        color: '#161616'
    }
    return (
        <>
        <nav className="host-header">
            <NavLink end to='.' className='host' style={({isActive}) => isActive ? styles : null}>Dashboard</NavLink>
            <NavLink to='income' className='about' style={({isActive}) => isActive ? styles : null}>Income</NavLink>
            <NavLink to='vans' className='vans' style={({isActive}) => isActive ? styles : null}>Vans</NavLink>
            <NavLink to='reviews' className='review' style={({isActive}) => isActive ? styles : null}>Reviews</NavLink> 
        </nav></>
    )
}