import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Flow from '../../shui-frontend/src/pages/flow/Flow.jsx'
import Writemsg from './pages/writemsg/Writemsg.jsx';
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Writemsg />} />
        <Route path="/Flow" element={<Flow />} />
      </Routes>
    </Router>
  );
}

export default App;