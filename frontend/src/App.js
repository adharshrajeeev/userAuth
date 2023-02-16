import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import UserHome from './Routes/UserHome';




function App() {
  return (
    
     <Router>
      <Routes>
        <Route path='/' element={ <UserHome/>} />
      </Routes>
     </Router>
   
  );
}

export default App;
