import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export default function VanDetail() {
    const params = useParams()
    const [van, setVan] = useState(null)

    useEffect(() => {
        async function getData() {
            const res = await fetch(`/api/vans/${params.id}`)
            const data = await res.json()
            setVan(data.vans)
        }
        getData()
    }, [params.id])

    return (
        <div className="van-detail-container">
            {van ? (
                <div className="van-detail">
                    <img src={van.imageUrl} />
                    <div className="data-container">
                        <i className={`van-type ${van.type} selected`}>{van.type}</i>
                        <h2>{van.name}</h2>
                        <p className="van-price"><span>${van.price}</span>/day</p>
                        <p className="van-description">{van.description}</p>
                        <button className="link-button">Rent this van</button>
                    </div>
                    
                </div>
            ) : <p>Loading...</p>}
        </div>
    )
}