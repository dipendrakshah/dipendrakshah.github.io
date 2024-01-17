import React from 'react';

const Blog = () => {
  return (
    <div id="blogs" className="container mt-5">
      <h1>My Blogs</h1>
      <div className="row">
        {[1, 2, 3].map((blog) => (
          <div key={blog} className="col-md-4">
            <div className="card mb-4">
              <img
                src="https://picsum.photos/id/1018/300/200"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Blog Title {blog}</h5>
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

export default Blog;