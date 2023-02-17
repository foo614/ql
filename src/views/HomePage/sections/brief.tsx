import React, { useRef } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { makeStyles } from '@mui/styles';
import homeStyle from '../../../assets/Home';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { WHATSAPP_LINK, CONTACT, NUMBER, ABOUT_US, FAQ } from "../../../constant";
import Hand from "../../../assets/Images/hand.png";
import Bag from "../../../assets/Images/money-bag.png";
import Hidden from '@mui/material/Hidden';
import Button from '@mui/material/Button';
import HomeStepper from "./stepper";
import HomeFaq from "./faq";
import WhatsApp from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlaceIcon from '@mui/icons-material/Place';
import Fab from '@mui/material/Fab';
import MobileStepper from "./mobileStepper";

const useStyle = makeStyles(homeStyle);
const Brief = () => {
    const aboutUsSection = useRef<HTMLLinkElement>(null);
    const faqSection = useRef<HTMLLinkElement>(null);
    const contactSection = useRef<HTMLLinkElement>(null);
    const classes = useStyle();

    const checkMenuItemFunc = (item: string) => {
        if (item === ABOUT_US) {
            window.scrollTo({
                top: aboutUsSection?.current?.offsetTop,
                behavior: 'smooth',
            });
        } else if (item === FAQ) {
            window.scrollTo({
                top: faqSection?.current?.offsetTop,
                behavior: 'smooth',
            });
        } else if (item === CONTACT) {
            window.scrollTo({
                top: contactSection?.current?.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    return (
        <>
            <Header checkMenuItemFunc={checkMenuItemFunc} />
            {/* BriefSection */}
            <div className={classes.sections}>
                <section className={classes.topSection}>
                    <div className={classes.container}>
                        <div className='textCenter'>
                            <p className={classes.briefMainText + " mb-0"}>Get Fast Cash Loans</p>
                            <p className={classes.briefMainText + " mt-0 mb-0"}>from Trusted Licensed</p>
                            <p className={classes.briefMainText + " mt-0"} >Money lender in Singapore</p>
                            <p className={classes.briefSubText + " mt-0"}>Licensed Money Lender In Singapore Providing Fast And Easy Loans To Support Your Financial Needs. Apply for a Personal Loan with us for instant loan disbursement in 30 minutes!</p>
                        </div>
                        <div className='mt-3'>
                            <Grid container spacing={2} className="justifyCenter">
                                <Grid item md={6} xs={12}>
                                    <a href={WHATSAPP_LINK} target="_blank"
                                        rel="noreferrer noopener" className='textDeNone'>
                                        <Card sx={{ minWidth: 275 }} className={classes.briefCard}>
                                            <CardContent className='textCenter'>
                                                <div>
                                                    <LazyLoadImage
                                                        src={Hand}
                                                        width="40"
                                                        height="40"
                                                    />
                                                </div>
                                                <p className={classes.briefCardTitle}>Apply For Personal Loan</p>
                                                <p className={classes.briefCardSubTitle}>Loan disbursement in 30 minutes</p>
                                            </CardContent>
                                        </Card>
                                    </a>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <a href={WHATSAPP_LINK} target="_blank"
                                        rel="noreferrer noopener" className='textDeNone'>
                                        <Card sx={{ minWidth: 275 }} className={classes.briefCard}>
                                            <CardContent className='textCenter'>
                                                <div>
                                                    <LazyLoadImage
                                                        src={Bag}
                                                        width="40"
                                                        height="40"
                                                    />
                                                </div>
                                                <p className={classes.briefCardTitle}>Apply For Bridging Loan</p>
                                                <p className={classes.briefCardSubTitle}>Loan disbursement in 1 hour</p>
                                            </CardContent>
                                        </Card>
                                    </a>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </section>

                {/* AboutUsSection */}
                <section className='mt-3' ref={aboutUsSection}>
                    <div className={classes.container}>
                        <Grid container spacing={2}>
                            <Grid item md={6} xs={12}>
                                <p className={classes.aboutUsText + " mb-0"}>
                                    Individual & Business
                                </p>
                                <p className={classes.aboutUsTextColor + " mt-0 mb-0"}>
                                    Loans We Offer
                                </p>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <p className={classes.aboutUsSubText}>
                                    We know taking a quick loan fast from a bank might not be easy due to their stricter requirements and more complicated process. Here at QuickLoan, we are a licensed moneylenders in Singapore that has the right loan for you whatever your needs.
                                </p>
                            </Grid>
                        </Grid>
                    </div>
                    <div className={classes.threeStepSection}>
                        <div className={classes.container}>
                            <div className='mt-3'>
                                <p className={classes.stepperTitleStep + " textCenter mb-0"}>3 Easy Steps</p>
                                <p className={classes.stepperTitle + " textCenter mt-0"}>
                                    to Applying for a Loan</p>
                                <Hidden smDown>
                                    <div className='mt-3'>
                                        <HomeStepper />
                                    </div>
                                </Hidden>
                                <Hidden mdUp>
                                    <div className='mt-3'>
                                        <MobileStepper />
                                    </div>
                                </Hidden>
                                <div className='mt-1 textCenter'>
                                    <Button variant='contained' className={classes.contactUsBttn} onClick={() => checkMenuItemFunc(CONTACT)}>Contact Us</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQSection */}
                <section ref={faqSection} className={classes.faqSection}>
                    <div className={classes.container}>
                        <p className={classes.stepperTitle + " textCenter mb-1 mt-1"}>Your Questions, Answered</p>
                        <p className={classes.aboutUsSubText + " textCenter mt-0"}>Here are common questions we encounter from our customers. Feel free to drop us a <a href={WHATSAPP_LINK} className={classes.whatsAppLink} target="_blank"
                            rel="noreferrer noopener">WhatsApp</a> if you have a question we didn’t cover.</p>
                        <div>
                            <HomeFaq />
                        </div>
                    </div>
                </section>

                {/* ContactSection */}
                <section ref={contactSection}>
                    <div className={classes.container}>
                        <div>
                            <p className={classes.stepperTitle + " textCenter mb-1"}>Ready to Lend a Hand</p>
                            <p className={classes.aboutUsSubText + " textCenter mt-0"}>As the best licensed moneylender in Singapore, we look forward to alleviating your financial burdens with our quick, flexible and affordable loans.</p>
                        </div>
                        <Grid container className="mt-3">
                            <Grid item md={6} xs={12} className={classes.contactUsLeftGrid}>
                                <p className={classes.stepperTitle + " textCenter mb-1"}>Get in touch with us</p>
                                <p className={classes.aboutUsSubText + " textCenter mt-0"}>We're here to help and answer any question you might have. We're looking forward to hearing from you. </p>
                                <a href={WHATSAPP_LINK} target="_blank"
                                    rel="noreferrer noopener" className="textDeNone">
                                    <div className='d-Flex justifyCenter'>
                                        <div>
                                            <WhatsApp fontSize='large' className={classes.whatsAppIcon} />
                                        </div>
                                        <div>
                                            <p className={classes.contactInfoText + ' mb-0 pl-1'}>{NUMBER}</p>
                                        </div>
                                    </div>
                                </a>

                                <div className='d-Flex justifyCenter mt-1'>
                                    <div>
                                        <CallIcon fontSize='large' className={classes.callIcon} />
                                    </div>
                                    <div>
                                        <p className={classes.contactInfoText + ' mb-0 pl-1'}>{NUMBER}</p>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item md={6} xs={12} className={classes.contactUsRightGrid}>
                                <p className={classes.stepperTitle + " textCenter mb-1"}>Where to Find Us</p>
                                <p className={classes.aboutUsSubText + " textCenter mt-0"}>We also welcome walk-ins if you’re ready for a loan or have questions for us.</p>
                                <div className='d-Flex mt-1'>
                                    <div>
                                        <AccessTimeIcon fontSize='large' />
                                    </div>
                                    <div>
                                        <p className={classes.findUsSubText + ' mt-0 mb-0 pl-1'}>Opening Hours</p>
                                        <p className={classes.contactInfoText + ' mb-0 pl-1'}>Mon to Fri: 11am – 8pm</p>
                                        <p className={classes.contactInfoText + ' mb-0 pl-1'}>Sat: 12pm – 5pm</p>
                                        <p className={classes.contactInfoText + ' mb-0 pl-1'}>Closed on Sundays & Public Holidays</p>
                                    </div>
                                </div>
                                {/* <div className='d-Flex mt-1'>
                                    <div>
                                        <PlaceIcon fontSize='large' />
                                    </div>
                                    <div>
                                        <p className={classes.findUsSubText + ' mt-0 mb-0 pl-1'}>Location</p>
                                        <p className={classes.contactInfoText + ' mb-0 pl-1'}>{ADDRESS}</p>
                                    </div>
                                </div> */}
                            </Grid>
                        </Grid>
                    </div>
                </section>
            </div>
            <a href={WHATSAPP_LINK} target="_blank"
                rel="noreferrer noopener">
                <Fab className={classes.floatingWhatsAppBttn}>
                    <WhatsApp />
                </Fab>
            </a>
            <Footer checkMenuItemFunc={checkMenuItemFunc} />
        </>
    )
};

export default Brief;