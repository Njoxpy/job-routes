import { useParams } from "react-router-dom"

export default function CareersDetails() {

    const { id } = useParams()
    return (
        <div>
            <p className="container fw-bold text-center">{id}</p>
        </div>
    )
}