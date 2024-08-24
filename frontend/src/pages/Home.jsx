import { useEffect } from 'react';
import './Home.css';

function Home() {
    useEffect(() => {
        document.title = "Home | Silicon Valley Real Estate";
    }, []); 

    return (
        <main id="maincontent" className="home-page">
            <h1>Welcome to Silicon Valley Real Estate</h1>
            <p className="intro">Find your dream home today!</p>
            <div className="content">
            <p>Silicon Valley Real Estate is your premier partner for navigating the competitive and vibrant real estate market of Silicon Valley. With over two decades of experience, our team specializes in delivering personalized services that cater to the unique needs of each client. Whether you are buying your first home, seeking a luxurious residence, or investing in property, we are dedicated to helping you achieve your real estate goals.</p>
            <p>Our extensive knowledge of the Silicon Valley area, combined with our expertise in market trends and negotiation, ensures that you receive the best possible outcome. We pride ourselves on our integrity, professionalism, and commitment to excellence. At Silicon Valley Real Estate, we believe your home is more than just a place to live - it is where your life unfolds.</p>
            <p>Let us guide you through the intricacies of buying or selling your home with confidence. Explore our website to learn more about our services, view current listings, and discover why Silicon Valley Real Estate is the trusted choice for clients throughout the region.</p>
            </div>
        </main>
    );
}

export default Home;
