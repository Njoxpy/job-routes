const About = () => {
  return (
    <div className="container p-8">
      <div>
        <h2 className="font-semibold text-center text-2xl">About Us</h2>
        <div>
          <div className="p-2">
            <h1 className="font-light text-center text-xl">Mission</h1>
            <p className="border-l-4 p-2">
              Our mission is simple: to bridge the gap between opportunity and talent. 
              We empower businesses to post job openings effortlessly and connect them 
              with skilled professionals ready to make an impact. Whether it’s a startup 
              hustle or an enterprise-level hunt, we streamline hiring for the modern world.
            </p>
          </div>

          <div className="p-2">
            <h1 className="font-light text-center text-xl">Vision</h1>
            <p className="border-l-4 p-2">
              We envision a world where meaningful work finds the right people—fast. 
              A future where job seekers don’t get lost in endless applications, and employers 
              don’t drown in unqualified resumes. Just real connections, real fast.
            </p>
          </div>

          <div className="p-2">
            <h1 className="font-light text-center text-xl">Goals</h1>
            <p className="border-l-4 p-2">
              - Simplify the job posting experience for employers<br/>
              - Help job seekers discover opportunities tailored to their skills<br/>
              - Build a trusted, smart ecosystem that accelerates hiring decisions<br/>
              - Support local and global job markets with tools that work anywhere
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
