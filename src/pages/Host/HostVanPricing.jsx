import { useOutletContext } from "react-router-dom"

export default function HostVanPricing(){
    const [van] = useOutletContext()

    return (
        <div className="host-van-pricing">
            <p><b>${van.price}</b>/day</p>
        </div>
    )
}