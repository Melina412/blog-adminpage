import { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.scss';
import Landingpage from './pages/Landingpage';
import Detailpage from './pages/Detailpage';
import Adminpage from './pages/Adminpage';

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('http://localhost:9999/api/blogs')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return setBlogs(data);
      })
      .catch((error) => console.error(error));
  };

  console.log({ blogs });
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Landingpage blogs={blogs} fetchData={fetchData} />}
        />
        <Route path='/blog' element={<Detailpage fetchData={fetchData} />} />
        <Route path='/admin' element={<Adminpage fetchData={fetchData} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
