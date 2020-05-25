import React from 'react';
import styles from './header.module.scss';


function Header(props) {
    return (
        <header>
            <button className={styles.button}>test button from header component</button>
        </header>
    )
}

export default Header;