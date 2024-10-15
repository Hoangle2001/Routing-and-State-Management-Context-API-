import Project1Img from "../assets/project1.png";

const project = () => {
  return (
    <>
      <div className="bg-indigo-800 m-20 max-w-full">
        <div className="grid justify-items-center m-10">
          <h1 className="text-3xl mt-10">Projects</h1>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-4 p-5"></div>
          <hr />
          <div className="grid grid-cols-2 gap-4 p-5">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
              <div className="md:flex">
                <div className="p-8">
                  <div className="text-black uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                    Weather-App
                  </div>
                  <a href="#">Subheading</a>
                  <p className="mt-2 text-slate-500">
                    A real-time weather forecasting tool built with React to
                    deliver accurate and dynamic weather updates.
                  </p>
                </div>
                <div className="md:shrink-0 p-5">
                  <img
                    className="rounded-full w-full "
                    src={Project1Img}
                    alt="Project1"
                    width={150}
                    height={150}
                  />
                </div>
              </div>
            </div>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
              <div className="md:flex">
                <div className="p-8">
                  <div className="text-black uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                    Weather-App
                  </div>
                  <a href="#">Subheading</a>
                  <p className="mt-2 text-slate-500">
                    A real-time weather forecasting tool built with React to
                    deliver accurate and dynamic weather updates.
                  </p>
                </div>
                <div className="md:shrink-0 p-5">
                  <img
                    className="rounded-full w-full "
                    src={Project1Img}
                    alt="Project1"
                    width={150}
                    height={150}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default project;
