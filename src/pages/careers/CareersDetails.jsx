import { useLoaderData, useParams } from "react-router-dom";

const CareersDetails = () => {
  const { id } = useParams();
  const careerDetails = useLoaderData();
  return (
    <div className="p-8 bg-secondary text-white">
      <h2 className="font-bold text-2xl">
        Carrier Details for {careerDetails.title}
      </h2>
      <p>Starting Salary {careerDetails.salary}</p>
      <p className="text-whit">Based in {careerDetails.location}</p>
      <p>
        Job Description: <span>{careerDetails.description}</span>
      </p>
    </div>
  );
};

export default CareersDetails;

export const careersDetailsLoader = async ({ params }) => {
  const { id } = params;
  const response = await fetch(`http://localhost:3000/careers/${id}`);
  return response.json();
};

/**
- What is I want to display a specific name for the career title.
http://localhost:5173/careers/10
 */
