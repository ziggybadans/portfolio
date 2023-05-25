"use client";

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
        const iconSrc = 'scroll-to-top-dark.png'
        const iconAlt = 'Scroll to top'

        return (
            <button 
                onClick={this.scrollToTop} 
                className={`${styles.scrollTopButton} ${isVisible ? styles.visible : ''}`}
            >
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="450 0 842.5 842.5" width="125" height="125">
                    <circle fill="white" cx="960" cy="540" r="241"/>
                    <path fill="black" d="m945.91,455.82c-.81.77-1.63,1.51-2.42,2.3-17.64,17.64-35.28,35.28-52.93,52.92-1.27,1.27-2.56,2.55-3.97,3.66-5.26,4.16-12.84,3.7-17.7-.99-4.99-4.83-5.72-12.43-1.62-17.87,1.14-1.51,2.48-2.87,3.82-4.21,26.21-26.25,52.43-52.48,78.64-78.72,6.35-6.36,14.63-6.43,20.93-.12,26.08,26.1,52.17,52.2,78.24,78.31,1.34,1.34,2.68,2.69,3.9,4.15,4.47,5.35,4.1,13.1-.82,18.12-4.94,5.03-12.65,5.6-18.1,1.27-1.33-1.06-2.56-2.26-3.76-3.47-17.72-17.7-35.42-35.41-53.14-53.11-.77-.77-1.59-1.5-3.12-2.02v3.82c0,65.74-.01,131.48.02,197.22,0,5.41-1.63,9.93-6.28,12.93-8.81,5.69-20.2-.21-20.89-10.76-.08-1.23-.04-2.47-.04-3.7,0-65.17,0-130.34,0-195.51,0-1.3,0-2.6,0-3.9-.26-.1-.52-.21-.78-.31Z"/>
                </svg>
            </button>
        );
    }
}

export default ScrollToTopButton;