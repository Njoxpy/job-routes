const Faq = () => {
  return (
    <section>
      <div className="container-md m-2">
        <div className="text-center">
          <h2>FAQ</h2>
          <p className="lead text-muted">
            Frequently Asked Questions About Job Routes
          </p>
          <div className="accordion" id="accordionExample">
            {/* item 1 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#q1"
                  aria-expanded="true"
                  aria-controls="q1"
                >
                  What is a job routes site?
                </button>
              </h2>
              <div
                id="q1"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  A job routes site is an online platform designed to help job
                  seekers find employment opportunities in various industries
                  and sectors. These platforms often provide job listings,
                  company profiles, career resources, and tools for job seekers
                  to connect with employers.
                </div>
              </div>
            </div>

            {/* item 2 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#q2"
                  aria-expanded="false"
                  aria-controls="q2"
                >
                  How do job routes sites work?
                </button>
              </h2>
              <div
                id="q2"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Job routes sites typically allow users to search for jobs
                  based on criteria such as location, industry, job title, and
                  experience level. Users can then apply to relevant job
                  listings directly through the platform or by following
                  instructions provided by the employer.
                </div>
              </div>
            </div>

            {/* item 3 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#q3"
                  aria-expanded="false"
                  aria-controls="q3"
                >
                  How can I avoid scams on job routes sites?
                </button>
              </h2>
              <div
                id="q3"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  To avoid scams on job routes sites, be cautious of job
                  postings that seem too good to be true, and never provide
                  personal or financial information to employers unless you are
                  certain they are legitimate. Additionally, research companies
                  and employers before applying to confirm their credibility.
                </div>
              </div>
            </div>

            {/* item 4 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#q4"
                  aria-expanded="false"
                  aria-controls="q4"
                >
                  Can job routes sites help with career advancement and
                  professional development?
                </button>
              </h2>
              <div
                id="q4"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Yes, many job routes sites offer resources and tools to help
                  with career advancement and professional development,
                  including career coaching, online courses, and networking
                  opportunities.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
