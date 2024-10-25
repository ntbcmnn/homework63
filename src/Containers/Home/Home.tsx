import { useCallback, useEffect, useState } from 'react';
import { IPost, IPostAPI } from '../../types';
import axiosAPI from '../../axiosAPI.ts';
import Post from '../../Components/Post/Post.tsx';
import Loader from '../../Components/UI/Loader/Loader.tsx';

const Home = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loader, setLoader] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    try {
      setLoader(true);
      const response: { data: IPostAPI } = await axiosAPI<IPostAPI>('/posts.json');

      if (response.data) {
        const postsAPI: IPost[] = Object.keys(response.data).map(postKey => {
          return {
            ...response.data[postKey],
            id: postKey,
          };
        });

        const sortedPosts = postsAPI.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        setPosts(sortedPosts);
      }
    } catch (e) {
      console.error(e);
      setLoader(false);
    } finally {
      setLoader(false);
    }
  }, []);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  return (
    <>
      {loader ? <Loader/> :
        <>
          <div className="container d-flex flex-column align-items-center gap-3">
            {posts.length === 0 ? <p className="fs-4">No posts found</p> :
              posts.map(post => (
                <Post
                  key={post.id}
                  post={post}
                />
              ))
            }
          </div>
        </>
      }
    </>
  );
};

export default Home;