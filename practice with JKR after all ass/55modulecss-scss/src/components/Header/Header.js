import styles from './Header.module.css';
import React from 'react';

const Header = () => {
    return (
        <div>
            <h1 className={styles.title}>this is header</h1>
        </div>
    );
};

export default Header;