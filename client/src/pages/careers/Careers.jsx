import React, { useEffect, useState } from "react";
import { useLoaderData, Link, NavLink } from "react-router-dom";

const Careers = () => {
  const careers = useLoaderData();
  return (
    <div>
      <h1 className="font-bold text-center">Jobs Available</h1>
      <div>
        {careers.map((career) => (
          <div key={career.id}>
            <NavLink to={career.id.toString()} className="hover:text-primary">
              {career.title}
            </NavLink>
            <p>
              <small className="text-whit">Based in {career.location}</small>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;

export const careersLoader = async () => {
  const response = await fetch("http://localhost:3000/careers");

  if (!response.ok) {
    throw Error("Could not fetch!")
  }
  return response.json();
};

/*
-  Create a function for fetching data from endpoints.
- Export function and pass a prop into loader.
*/
