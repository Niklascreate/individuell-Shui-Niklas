import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Flow from '../../shui-frontend/src/pages/flow/Flow.jsx'
import Writemsg from './pages/writemsg/Writemsg.jsx';
import "./App.css";

function App() {
  return (
    <Router>
      <div className='app'>
      <Routes>
        <Route path="/" element={<Flow />} />
        <Route path="/Flow" element={<Flow />} />
        <Route path="/Writemsg" element={<Writemsg />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;