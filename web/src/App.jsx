import Home from './pages/Home';
import OngoingCall from './pages/OngoingCall';
import {BrowserRouter as Router,Routes, Route, Navigate} from "react-router-dom";

const App = () => {
  return (
    <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/case/:id" element={<OngoingCall />}/>
            </Routes>
        </Router>
  )
};

export default App;
