import PostForm from '../../Components/PostForm/PostForm.tsx';
import axiosAPI from '../../axiosAPI.ts';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { IPostForm } from '../../types';
import Loader from '../../Components/UI/Loader/Loader.tsx';

const AddPost = () => {
  const [loader, setLoader] = useState<boolean>(false);
  const navigate = useNavigate();

  const submitForm = async (post: IPostForm) => {
    try {
      setLoader(true);
      await axiosAPI.post('/posts.json', {...post, date: new Date().toISOString()});
      navigate('/');
    } catch (e) {
      console.error(e);
      setLoader(false);
    } finally {
      setLoader(false);
    }
  };

  return (
    <>
      {loader ? <Loader/> : <PostForm submitForm={submitForm}/>}
    </>
  );
};

export default AddPost;