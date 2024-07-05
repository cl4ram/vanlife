import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"
import HostDetailHeader from "../../components/HostDetailHeader"


export default function VansHostDetail(){
    const params = useParams()
    const [van, setVan] = useState(null)

    useEffect(() => {
        async function getData() {
            const res = await fetch(`/api/host/vans/${params.id}`)
            const data = await res.json()
            setVan(data.vans)
        }
        getData()
    }, [params.id])

    if (!van) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>

            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={van.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${van.type}`}
                        >
                            {van.type}
                        </i>
                        <h3>{van.name}</h3>
                        <h4>${van.price}/day</h4>
                    </div>
                </div>
                <HostDetailHeader/>
                <Outlet context={[van, setVan]}/>
            </div>
        </div>
    )
}