
import './App.css';
import TypiCode from './Typicoode/TypiCode';
import HomePage from './Home/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReduxCounter from './ReduxCounter/ReduxCounter';
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/typicode" element={<TypiCode />} />
          <Route path="/ReduxCounter" element={<ReduxCounter />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
