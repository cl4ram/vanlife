import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Vans(){
    const [vans, setVans] = useState([])

    useEffect(() => {
        async function getData() {
          const res = await fetch('/api/vans')
          const data = await res.json()
          setVans(data.vans)
        console.log(data.vans)
        }
        getData()
    }, [])

    const vansElement = vans.map(van => (
        <div key={van.id} className="van-tile">
            <Link to={`/vans/${van.id}`} aria-label={`View details for ${van.name}, priced at $${van.price} per day`}>
                <img src={van.imageUrl} alt={`Image of ${van.name}`}/>
                <div className="van-info">
                    <p className="van-title">{van.name}</p>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))
    
    return (
        <>
            <div className="van-list-container">
                <h1>Explore our van options</h1>
                <div className="van-list">
                    {vansElement}
                </div>
            </div>
        </>
    )
}