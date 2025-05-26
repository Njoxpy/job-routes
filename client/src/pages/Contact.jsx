import { useState } from "react";

const Contact = () => {
  // state variables
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isPending, setIsPending] = useState(false);

  //   handle submit
  const handleSubmit = (event) => {
    event.preventDefault();

    // reset
    setIsPending(true);
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div className="p-8">
      <div>
        <h1 className="text-center mb-2 font-semibold">Send Us message</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="p-2 m-2">
              Name
            </label>
            <input
              type="text"
              name=""
              id=""
              required
              placeholder="Enter Name"
              className="border p-1 border-blue-700"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>

          <div>
            <label htmlFor="name" className="p-2 m-2">
              E-Mail
            </label>
            <input
              type="email"
              name=""
              id=""
              required
              placeholder="Enter E-Mail"
              className="border p-1 border-blue-700"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="20"
              className="border p-1 border-blue-700"
              required
              placeholder="Enter message"
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
              }}
            ></textarea>
          </div>
          {!isPending && (
            <button className="p-2 bg-blue-600 hover:bg-blue-900 hover:font-bold text-white rounded mt-2">
              Submit
            </button>
          )}
          {isPending && (
            <button className="p-2 bg-blue-600 hover:bg-blue-900 hover:font-bold text-white rounded mt-2">
              Submit
            </button>
          )}
        </form>

        <div>
          <address>
            <strong>Job Routes</strong>
            <h1>
              <span className="font-bold">Phone No:</span>+255 623 216 660
            </h1>
            <h1>
              <span className="font-bold">E-Mail:</span>
              <a
                href="mailto:jobroutes@gmail.com"
                className="text-blue-600 hover:underline"
              >
                jobroutes@gmail.com
              </a>
            </h1>
            <h1>
              <span className="font-bold">Location:</span>Njombe Road 6B Njox
              Road Block 6
            </h1>
          </address>
        </div>
      </div>
    </div>
  );
};

export default Contact;

/**
 section 1
- name
- email
- message

section 2
- phone number
- email
- location

- pHone number icon, email svg, location svg.
 */
