import React from 'react';
import Container from "react-bootstrap/Container";
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.Wrapper}>
            <Container>
                <div className={styles.SocialLinks}>
                    <a href="https://discord.com" target="_blank" className={styles.Link}>Discord</a>
                    <a href="https://twitter.com" target="_blank" className={styles.Link}>Twitter</a>
                    <a href="https://github.com" target="_blank" className={styles.Link}>Github</a>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
