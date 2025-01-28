import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Berita from './page-Berita/Berita.js';
import Galeri from './page-Galeri/Galeri.js';
import Home  from './page-Home/Home.js';
import Tentang from './page-Tentang/Tentang.js';
import Kontak from './page-Kontak/Kontak.js';
import BeritaDetail from './page-beritaDetail/BeritaDetail.js';
import MailList from './page-Admin/MailList.js';
import Login from './page-Admin/Login.js';
import NewsList from './page-Admin/NewsList.js';
import AdminHome from './page-Admin/AdminHome.js';
import GalleryList from './page-Admin/GalleryList.js';
import AuthAccess from './components/AuthAccess.js';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/tentang' element={<Tentang/>}/>
          <Route path='/berita' element={<Berita/>}/>
          <Route path='/galeri' element={<Galeri/>}/>
          <Route path='/kontak' element={<Kontak/>}/>
          <Route path='/berita/:id' element={<BeritaDetail/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/admin' element={AuthAccess(AdminHome,'/admin')}/>
          <Route path='/mail-list' element={AuthAccess(MailList,'/mail-list')}/>
          <Route path='/news-list' element={AuthAccess(NewsList,'/news-list')}/>
          <Route path='/gallery-list' element={AuthAccess(GalleryList,'/gallery-list')}/>          
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
