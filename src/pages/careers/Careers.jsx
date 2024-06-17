import React, { useEffect, useState } from 'react'

const Careers = () => {

    const [careers, setCareers] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/careers ')
            .then(res => {
                return res.json()
            })
            .then((data) => {
                console.log(data);
                setCareers(data);
            })
    }, [])
    return (
        <div>Hellow</div>
    );
}

export default Careers;