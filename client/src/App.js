import {Routes, Route} from 'react-router-dom';

// Components
import {
  Layouts
} from './components';

// Pages
import {
  Home,
  Chat,
} from './pages';


import socketIO from "socket.io-client"

const socket = socketIO.connect("http://localhost:8080")

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layouts/>}>
          <Route path="/" element={<Home  socket={socket}/>}/>
          <Route path="/chat" element={<Chat  socket={socket}/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;