import { useNavigate, useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import axiosAPI from '../../axiosAPI.ts';
import { IPost, IPostForm } from '../../types';
import Loader from '../../Components/UI/Loader/Loader.tsx';
import PostForm from '../../Components/PostForm/PostForm.tsx';

const EditPost = () => {
  const [post, setPost] = useState<IPost>();
  const [loader, setLoader] = useState<boolean>(false);
  const params = useParams<{ postId: string }>();
  const navigate = useNavigate();

  const fetchOnePost = useCallback(async (id: string) => {
    try {
      setLoader(true);
      const response: { data: IPost } = await axiosAPI<IPost>(`/posts/${id}.json`);
      if (response.data) setPost(response.data);
    } catch (e) {
      console.error(e);
      setLoader(false);
    } finally {
      setLoader(false);
    }
  }, []);

  const submitForm = async (post: IPostForm) => {
    try {
      if (params.postId) {
        setLoader(true);
        await axiosAPI.put(`/posts/${params.postId}.json`, {...post});
        navigate('/');
      }
    } catch (e) {
      console.error(e);
      setLoader(false);
    } finally {
      setLoader(false);
    }
  };

  useEffect((): void => {
    if (params.postId) {
      void fetchOnePost(params.postId);
    }
  }, [params.postId, fetchOnePost]);

  return (
    <>
      {loader ? <Loader/> :
        <>
          {post ? <PostForm postToEdit={post} submitForm={submitForm}/> : null}
        </>
      }
    </>
  );
};

export default EditPost;