import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Containers/Home/Home.tsx';
import EditPost from './Containers/EditPost/EditPost.tsx';
import Navigation from './Components/Navigation/Navigation.tsx';
import About from './Containers/About/About.tsx';
import AddPost from './Containers/AddPost/AddPost.tsx';
import Contacts from './Containers/Contacts/Contacts.tsx';
import PostInfo from './Containers/PostInfo/PostInfo.tsx';

const App = () => {
  return <>
    <header>
      <Navigation/>
    </header>

    <div className="container mt-5">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="posts" element={<Home/>}/>
        <Route path="/posts/new-post" element={<AddPost/>}/>
        <Route path="/posts/:postId" element={<PostInfo/>}/>
        <Route path="posts/:postId/edit" element={<EditPost/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="*" element={<h2>Page not found</h2>}/>
      </Routes>
    </div>
  </>;
};

export default App;
