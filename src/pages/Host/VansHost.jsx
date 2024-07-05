import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function VansHost(){

    const [hostVans, setHostVans] = useState([])

    useEffect(() => {
        async function getData() {
          const res = await fetch('/api/host/vans')
          const data = await res.json()
          setHostVans(data.vans)
        console.log(data.vans)
        }
        getData()
    }, [])

    const hostVansElement = hostVans.map(van => (
        <Link
            to={`/host/vans/${van.id}`}
            key={van.id}
            className="host-van-link-wrapper"
        >
            <div className="host-van-single" key={van.id}>
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
            </div>
        </Link>
    ))

 
    return (
        <>
        <h1 className="host-vans-title">Your listed vans</h1>
        <div className="host-vans-list">
                {
                    hostVans.length > 0 ? (
                        <section>
                            {hostVansElement}
                        </section>

                    ) : (
                            <h2>Loading...</h2>
                        )
                }
            </div>
        </>
    )
}