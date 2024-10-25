import React from 'react';
import { IPost } from '../../types';
import { Link } from 'react-router-dom';

interface Props {
  post: IPost;
  children?: React.ReactNode | undefined;
}

const Post: React.FC<Props> = ({post, children}) => {
  return (
    <>
      <div className="card w-75 bg-dark text-light border-0 rounded-4">
        <div className="card-body p-4">
          <p
            className="card-text text-secondary"
          >
            Added on: {new Date(post.date).toLocaleString()}
          </p>
          <h5 className="card-title mb-4">{post.title}</h5>
          {
            children ? children
              :
              <Link
                to={`/posts/${post.id}`}
                className="d-inline-flex align-items-center gap-2 text-decoration-none custom-link"
              >
                Read more
                <i className="bi bi-arrow-right-short fs-4"></i>
              </Link>
          }
        </div>
      </div>
    </>
  );
};

export default Post;