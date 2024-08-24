import './Footer.css';
import PropTypes from 'prop-types'; // PropTypes

function Footer({ onNavigate }) {
    return (
        <footer className="footer"> 
            <p>Contact Us<br />
            +1 408-123-8888<br />
            support@svre.com<br />
            97 E Brokaw Rd STE 123, San Jose CA 95118</p>
            
            <p>
                Silicon Valley Real Estate © 2024
                DRE# 02092688
                <span onClick={() => onNavigate('PrivacyPolicy')}>Privacy Policy</span>
            </p>
        </footer>
    );
}

Footer.propTypes = {
    onNavigate: PropTypes.func.isRequired, //  PropTypes 
};

export default Footer;
