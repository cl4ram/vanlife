import { useOutletContext } from "react-router-dom"

export default function HostVanPhotos(){
    const [van] = useOutletContext()
    return (
        <div className="host-van-info">
            <img src={van.imageUrl} alt={`Image of ${van.name} van`} />
        </div>
    )
}