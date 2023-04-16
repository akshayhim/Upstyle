//import logo from './logo.svg';
import Navbar from './components/Navbar';
import Grid from './components/ResponsiveGrid'
// import Users from './components/Users'
import './App.css';

function App() {
  return (
    <body>
      <>
        <navbar>
          <Navbar/>
        </navbar>
        <div>
          <Grid/>
        </div>
        {/* <div>
          <Users/>
        </div> */}
      </>
    </body>
  );
}

export default App;
