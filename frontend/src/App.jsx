import { useState } from 'react';
import Home from './pages/Home';
import Listing from './pages/Listing';
import Detail from './pages/Detail';
import ContactForm from './pages/ContactForm';
import DropdownMenu from './components/DropdownMenu';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import './App.css';
import PropertyList from './components/PropertyList';

function App() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    
    const [currentPage, setCurrentPage] = useState('Home');
    const [selectedProperty, setSelectedProperty] = useState(null);

    const showDetail = (property) => {
      setSelectedProperty(property);
      setCurrentPage('Detail');
    };

    const navigate = (page) => {
        setCurrentPage(page);
    };
   

    return (
        <div className={theme}> 
            <a href="#maincontent" className="skip-link">Skip to main content</a>
            <button onClick={toggleTheme} style={{position: 'absolute', top: 0, right: 0}}>Toggle Theme</button> 
            <Header />
            <DropdownMenu navigate={navigate} />
            <nav>
                <button onClick={() => navigate('Home')}>Home</button>
                <button onClick={() => navigate('Listing')}>Listing</button>
                <button onClick={() => navigate('Contact')}>Contact</button>
            </nav>
            {currentPage === 'Home' && <Home />}
            {currentPage === 'Contact' && <ContactForm />}
            {currentPage === 'Listing' && <Listing onPropertySelect={showDetail} />}
            {currentPage === 'Detail' && <Detail property={selectedProperty} onBack={() => setCurrentPage('Listing')} />}
            {currentPage === 'PrivacyPolicy' && <PrivacyPolicy />}

            <Footer onNavigate={navigate} />

        
            <PropertyList /> {}
    
        </div>
    );
}

export default App;
