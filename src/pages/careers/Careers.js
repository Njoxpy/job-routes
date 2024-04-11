import { useBeforeUnload ,  Link} from "react-router-dom";

const Careers = () => {
    const careers = useBeforeUnload()

    return (
        <div>
            {careers.map(career => (
                <Link to="/" key={career.id}>
                    <p>{career.title}</p>
                    <p>Based on {career.location}</p>
                </Link>
            ))}
        </div>
    );
}
 
export default Careers;

// loader function
export const careersLoader = async () => {
    const res = await fetch('http://localhost:8000/careers');

    return res.json()
}

// provide a way to handle data when search failed

