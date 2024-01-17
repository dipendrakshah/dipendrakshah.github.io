import React from "react";

const Projects = () => {
  return (
    <div id="projects" className="container mt-5">
      <h1>Recent Projects</h1>
      <div className="row">
        {[1, 2, 3].map((project) => (
          <div key={project} className="col-md-4">
            <div className="card mb-4">
              <img
                src="https://picsum.photos/id/1015/300/200"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Project Title {project}</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;