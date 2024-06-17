import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <div className="container p-8">
        <header className="text-center mb-5">
          <h1 className="font-bold text-center">
            Welcome to Computer Science Jobs
          </h1>
        </header>
        <div>
          <p className="border-l-4 p-2">
            Are you a computer science enthusiast looking for your next career
            move? Look no further!
          </p>
          <p className="border-l-4 p-2">
            Computer Science Jobs is the ultimate platform for connecting
            talented individuals like you with exciting job opportunities in the
            field of computer science.
          </p>
          <p className="border-l-4 p-2">
            Whether you're a <code>software engineer</code>,{" "}
            <code>data scientist</code>, or <code>cybersecurity expert</code>,
            we've got you covered. Join our community today and take your career
            to new heights!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
