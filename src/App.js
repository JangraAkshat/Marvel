import './App.css';
import Navbar from './components/NavBar/navbar'
import NewsList from './components/Home/NewsList/NewsList';
import MovieList from './components/Movies/MovieList/MovieList';
import TVList from './components/TV/tvlist/TVList';
import ViewingOrder from './components/ViewingOrder/viewingorder';
import UpcomingList from './components/Upcoming/UpcomingList/UpcomingList';
import TheoryList from './components/FanTheories/FanTheoriesList/FanTheoriesList';
import Ask from './components/Ask/Ask';
import Search from './components/Characters/Search/Search';
import Footer from './components/Footer/Footer';
import { Route, Routes, Navigate } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <div className='nav'>
        <Navbar />
      </div>

      <div className='content'>
        <Routes >
          <Route path='/home' Component={NewsList} />
          <Route path='/movies' Component={MovieList} />
          <Route path='/tvshows' Component={TVList} />
          <Route path='/viewingorder' Component={ViewingOrder} />
          <Route path='/upcoming' Component={UpcomingList} />
          <Route path='/characters' Component={Search} />
          <Route path='/theories' Component={TheoryList} />
          <Route path='/ask' Component={Ask} />
          <Route path='/' Component={NewsList} />
        </Routes>

      </div>

      <div className='foot'>
        <Footer />
      </div>

      {/* <Search /> */}
    </div>
  );
}

export default App;
