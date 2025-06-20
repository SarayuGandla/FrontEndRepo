
import LifecycleDemo from './components/LifecycleDemo';

function App() {
  return (
    <div>
      <LifecycleDemo/>
    </div>
  );
}

export default App;



















// // App.jsx
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import AboutUs from './components/AboutUs';
// import Contact from './components/Contact';

// function App() {
//   return (
//     <Router>
//       <nav style={{ marginBottom: '1rem' }}>
//         <Link to="/about">About Us</Link> | 
//         <Link to="/contact/123?source=homepage"> Contact </Link>
//       </nav>

//       <Routes>
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="/contact/:userId" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
