import { useParams, useNavigate, Link } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import axiosAPI from '../../axiosAPI.ts';
import { IPost } from '../../types';
import Loader from '../UI/Loader/Loader.tsx';
import Post from '../Post/Post.tsx';

const PostDetail = () => {
  const [post, setPost] = useState<IPost>();
  const [loader, setLoader] = useState<boolean>(false);
  const params = useParams<{ postId: string }>();
  const navigate = useNavigate();

  const fetchPost = useCallback(async (id: string) => {
    try {
      setLoader(true);
      const response: { data: IPost } = await axiosAPI.get(`/posts/${id}.json`);
      if (response.data) setPost(response.data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoader(false);
    }
  }, []);

  const deletePost = async () => {
    try {
      setLoader(true);
      if (params.postId) {
        await axiosAPI.delete(`/posts/${params.postId}.json`);
        navigate('/');
      }
    } catch (e) {
      setLoader(false);
      console.error(e);
    } finally {
      setLoader(false);
    }
  };

  useEffect((): void => {
    if (params.postId) {
      void fetchPost(params.postId);
    }
  }, [params.postId, fetchPost]);

  return (
    <>
      {loader ? <Loader/> :
        <>
          {post ? (
            <div className="container d-flex justify-content-center">
              <Post post={post}>
                <p className="card-text my-4">{post.description}</p>

                <hr className="border-light opacity-100"/>

                <div className="d-flex gap-3 justify-content-end mt-4">
                  <Link to="edit" className="btn btn-dark border-white fs-5">
                    <i className="bi bi-pen"></i>
                  </Link>

                  <button className="btn btn-dark border-white fs-5" onClick={deletePost}>
                    <i className="bi bi-trash3"></i>
                  </button>
                </div>
              </Post>
            </div>
          ) : <p className="text-center">No posts found</p>}
        </>
      }
    </>
  );
};

export default PostDetail;
