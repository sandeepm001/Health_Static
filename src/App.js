import './Styles/App.css';
import Header from './Components/Header'
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
import Appointment from './Components/Appointment';



function App() {

  return (
    <div className='app'>
      <Header />
      <div className='content'>
        <Sidebar />
        <div className='main'>
          <Dashboard />
          <Appointment />
        </div>
        
      </div>
    </div>
  );
}

export default App;
