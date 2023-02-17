import MainImage from "../Images/mainimage.png";
import Faq from "../Images/faq.png";

const containerFluid = {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    //width: "100%"
}

const container = {
    ...containerFluid,
    "@media (min-width: 576px)": {
        maxWidth: "540px",
    },
    "@media (min-width: 768px)": {
        maxWidth: "720px"
    },
    "@media (min-width: 992px)": {
        maxWidth: "960px"
    },
    "@media (min-width: 1200px": {
        maxWidth: "1140px",
        // maxWidth: "1140px",
    }

};

const homeStyle = () => ({
    sections: {
        padding: "0 0 50px 0"
    },
    //Brief Section Css
    briefMainTitle: {
        fontSize: "24px"
    },
    briefSubTitle: {
        fontSize: "32px"
    },
    briefLearnMoreBttn: {
        fontSize: "22px !important",
        backgroundColor: "#f5eb33 !important",
        color: "black !important",
        borderRadius: "0 !important"
    },
    briefLearnMoreBttnOutlined: {
        "&.MuiButton-outlined": {
            borderColor: "#f5eb33 !important"
        }
    },
    briefMainText: {
        fontSize: "48px",
        fontWeight: "700"
    },
    briefSubText: {
        fontSize: "20px",
        color: "#5e647d"
    },
    briefIcon: {
        fontSize: "3rem !important",
        color: "#3d97db"
    },
    briefCardTitle: {
        fontSize: "20px"
    },
    briefCardSubTitle: {
        fontSize: "16px",
        color: "#5e647d"
    },
    briefCard: {
        borderRadius: "20px !important",
        boxShadow: "4px 6px 20px 10px #c7c7c7 !important",
        cursor: "pointer",
        "&:hover": {
            border: "1px solid red",
            transition: "0.3s"
        }
    },
    topSection: {
        backgroundImage: `url(${MainImage})`,
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
        paddingBottom: "50rem"
    },

    //About Us Css
    aboutUsText: {
        fontSize: "42px",
        fontWeight: "700",
        textAlign: "center" as any
    },
    aboutUsTextColor: {
        fontSize: "42px",
        fontWeight: "700",
        textAlign: "center" as any,
        color: "#F3BF37"
    },
    aboutUsSubText: {
        fontSize: "20px",
        marginTop: "2rem",
        color: "#5e647d",
        textAlign: "center" as any
    },

    //StepperCss
    threeStepSection: {
        backgroundColor: "#f7f7f7",
        paddingBottom: "2rem",
        position: "relative" as any,
        marginTop: "3rem",
        paddingTop: "1rem"
    },
    stepperTitle: {
        fontSize: "42px",
        fontWeight: "700"
    },
    stepperTitleStep: {
        fontSize: "42px",
        fontWeight: "700",
        color: "#F3BF37"
    },
    contactUsBttn: {
        fontSize: "20px !important",
        backgroundColor: "white !important",
        color: "black !important",
        fontWeight: "700 !important"
    },
    stepperDiv: {
        paddingLeft: "15px !important",
        paddingRight: "15px !important"
    },
    stepperMainText: {
        fontSize: "22px",
        fontWeight: "700",
        marginTop: "0 !important"
    },
    whatsAppDiv: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    stepperSubText: {
        fontSize: "18px",
        color: "#5e647d"
    },
    whatsAppLink: {
        textDecoration: "none",
        fontWeight: "700",
        color: "#25D366"
    },

    //FAQCss
    faqSection: {
        backgroundImage: `url(${Faq})`,
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
        paddingBottom: "2rem",
        marginTop: "2rem",
        paddingTop: "2rem"
    },

    faqTitle: {
        fontSize: "18px",
        marginTop: "0",
        marginBottom: "0"
    },
    faqDescription: {
        fontSize: "18px",
        marginTop: "0",
        marginBottom: "0"
    },
    faqItem: {
        backgroundColor: "white !important"
    },
    faqDiv: {
        //borderTop: "0 !important",
        borderLeft: "0 !important",
        borderRight: "0 !important"
    },
    faqDivTop: {
        borderTop: "0 !important",
        borderLeft: "0 !important",
        borderRight: "0 !important"
    },

    // ContactCss
    contactUsLeftGrid: {
        backgroundColor: "white",
        padding: "1rem",
        boxShadow: "0px 10px 30px 10px #c7c7c7 !important"
    },
    contactUsRightGrid: {
        backgroundColor: "#f7f7f7",
        padding: "1rem",
        boxShadow: "10px 0px 30px 10px #c7c7c7 !important"
    },
    contactInfoText: {
        fontSize: "20px",
        marginTop: "10px"
    },
    whatsAppIcon: {
        padding: "5px",
        backgroundColor: "#25D366",
        color: "white",
        borderRadius: "5px"
    },
    callIcon: {
        padding: "5px",
        backgroundColor: "#25D366",
        color: "white",
        borderRadius: "5px"
    },
    findUsSubText: {
        fontSize: "20px",
        fontWeight: "700"
    },

    floatingWhatsAppBttn: {
        position: "fixed !important" as any,
        bottom: "50px",
        right: "20px",
        backgroundColor: "#25D366 !important",
        color: "white !important"
    },
    
    container: {
        ...container,
        marginTop: "2rem"
    },
});

export default homeStyle;