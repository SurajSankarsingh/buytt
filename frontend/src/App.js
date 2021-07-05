import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Layouts/Header';
import Footer from './components/Layouts/Footer';
import Home from './components/Home';
import ProductDetails from './components/Product/ProductDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <div className='container container-fluid'>
          <Route path='/' component={Home} exact />
          <Route path='/search/:keyword' component={Home} />
          <Route path='/product/:id' component={ProductDetails} exact />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
