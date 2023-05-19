import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/modules/ScrollToTopButton.module.scss'

class ScrollToTopButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        };
    }

    componentDidMount() {
        // Add scroll event listener
        window.addEventListener('scroll', this.toggleVisibility);
    }

    componentWillUnmount() {
        // Remove scroll event listener
        window.removeEventListener('scroll', this.toggleVisibility);
    }

    toggleVisibility = () => {
        if (window.scrollY > 300) {
            this.setState({
                isVisible: true
            });
        } else {
            this.setState({
                isVisible: false
            });
        }
    }

    scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    render () {
        const { isVisible } = this.state;
        const { darkMode } = this.props;

        // Conditionally set the icon based on the darkMode prop
        const iconSrc = darkMode ? '/scroll-to-top-light.png' : 'scroll-to-top-dark.png'
        const iconAlt = 'Scroll to top'

        return (
            <button 
                onClick={this.scrollToTop} 
                className={`${styles.scrollTopButton} ${isVisible ? styles.visible : ''}`}
            >
                <img src={iconSrc} alt={iconAlt} className="scrolltop-icon w-20 h-20"/>
            </button>
        );
    }
}

ScrollToTopButton.propTypes = {
    darkMode: PropTypes.bool.isRequired,
};

export default ScrollToTopButton;