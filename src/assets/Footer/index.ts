const footerStyle = () => ({
    footer: {
        backgroundColor: "#19287d",
    },
    footerMenuTitle: {
        fontSize: "18px",
        fontWeight: "700",
        color: "white"
    },
    footerMenu: {
        fontSize: "18px",
        cursor: "pointer",
        color: "white",
        "&:hover": {
            fontWeight: "700"
        }
    },
    footerText: {
        fontSize: "18px",
        color: "white",
    },
    verticalHRLine: {
        display: "inline-block",
        marginTop: "0 !important"
    },
    socialMediaList: {
        display: "flex",
        //flexDirection: "row",
        padding: "0"
    },
    fabIcon: {
        height: "45px !important",
        width: "47px !important"
    },
    footerBrandName: {
        marginTop: "3px",
        paddingLeft: "5px"
    },
    copyRightText: {
        color: "white"
    }
});

export default footerStyle;