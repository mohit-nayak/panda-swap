import React from 'react';
import BannerImage from '../../assets/images/banner-image.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AppButton from '../AppButton/AppButton';
import styles from './Banner.module.scss';

const Banner = () => {
    return (
        <div className={styles.Wrapper}>
            <Container>
                <Row className={styles.Row}>
                    <Col lg={5}>
                        <img src={BannerImage} alt="Banner" className={[styles.BannerImage, "general-shadow"].join(' ')} />
                    </Col>
                    <Col lg={7}>
                        <div className={styles.ContentContainer}>
                            <h1 className={[styles.Title]}>BambooBear is Ready</h1>
                            <p className={styles.Subtext}>Wake the panda ! Stake your Pandaswap LP tokens to start growing your very
                            own <span className={styles.MidBold}>$BAMBOO.</span></p>

                            <div className={styles.Rewards}>
                                <div className={styles.Item}>
                                    <p className={styles.Key}>Total bamboo supply</p>
                                    <p className={styles.Value}>55,503,894</p>
                                </div>
                                <div className={styles.Item}>
                                    <p className={styles.Key}>Rewards per block</p>
                                    <p className={styles.Value}>100 Bamboo</p>
                                </div>
                            </div>

                            <div>
                                <AppButton text="See the farms >" variant="dark" styleClasses={[styles.ActionBtn]} />
                                <a href="https://www.google.com" className={styles.FaqLink}>FAQ</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;
