import React from 'react';
import { makeStyles } from '@mui/styles';
import footerStyle from '../../assets/Footer';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ABOUT_US, FAQ, CONTACT } from '../../constant';
import Logo from "../../assets/Images/logo.png";
import Hidden from '@mui/material/Hidden';

const useStyle = makeStyles(footerStyle);

interface FooterProps {
    checkMenuItemFunc: (arg: string) => void
}

const Footer: React.FC<FooterProps> = ({ checkMenuItemFunc }) => {
    const classes = useStyle();

    return (
        <footer className={classes.footer}>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item md={7} xs={12}>
                        <Grid container spacing={2}>
                            <Grid item md={6} xs={12}>
                                <p className={classes.footerMenuTitle}>QUICK LINKS</p>
                                <p className={classes.footerMenu} onClick={() => checkMenuItemFunc(ABOUT_US)}>ABOUT US</p>
                                <p className={classes.footerMenu} onClick={() => checkMenuItemFunc(FAQ)}>FAQ</p>
                                <p className={classes.footerMenu} onClick={() => checkMenuItemFunc(CONTACT)}>CONTACT US</p>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <p className={classes.footerMenuTitle}>OPENING HOURS</p>
                                <p className={classes.footerText}>Mon to Fri: 11am – 8pm</p>
                                <p className={classes.footerText}>Sat: 12pm – 5pm</p>
                                <p className={classes.footerText}>Closed on Sundays & Public Holidays</p>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Hidden smDown>
                        <Grid item md={1} className="pb-1">
                            <Divider orientation="vertical" className={classes.verticalHRLine} variant="middle" />
                        </Grid>
                    </Hidden>
                    <Grid item md={4} xs={12} className="mb-2">
                        <div className='mt-2'>
                            <LazyLoadImage
                                height="80"
                                src={Logo}
                                width="250" />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    )
};
export default Footer;