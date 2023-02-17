import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import homeStyle from '../../../assets/Home';
import { makeStyles } from '@mui/styles';
import { NUMBER, WHATSAPP_LINK } from '../../../constant';

const useStyle = makeStyles(homeStyle);

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));


const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<AddIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const Faq = () => {
    const classes = useStyle();
    const [expanded, setExpanded] = React.useState<string | false>('');

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };
    return (
        <div>
            {/* Accordion1 */}
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className={classes.faqDivTop}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" className={classes.faqItem}>
                    <p className={expanded === 'panel1' ? classes.faqTitle + " fontWeight700" : classes.faqTitle}>Am I eligible for a loan?</p>
                </AccordionSummary>
                <AccordionDetails>
                    <p className={classes.faqDescription}>Our requirements for taking a loan are simple:</p>
                    <ul>
                        <li><p className={classes.faqDescription}>Minimum age: 18 years old</p></li>
                        <li><p className={classes.faqDescription}>Minimum salary: $1,800 for Singaporeans/PRs and foreigners</p></li>
                    </ul>
                </AccordionDetails>
            </Accordion>

            {/* Accordion2 */}
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className={classes.faqDiv}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" className={classes.faqItem}>
                    <p className={expanded === 'panel2' ? classes.faqTitle + " fontWeight700" : classes.faqTitle}>Can I still apply for a loan with a bad credit score?</p>
                </AccordionSummary>
                <AccordionDetails>
                    <p className={classes.faqDescription}>Here at QuickLoan, we focus on your current credit situation and repayment ability instead of your credit history. However, we do not offer loans to undischarged bankrupts.</p>
                </AccordionDetails>
            </Accordion>

            {/* Accordion3 */}
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className={classes.faqDiv}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" className={classes.faqItem}>
                    <p className={expanded === 'panel3' ? classes.faqTitle + " fontWeight700" : classes.faqTitle}>How do I take a loan with QuickLoan?</p>
                </AccordionSummary>
                <AccordionDetails>
                    <p className={classes.faqDescription}>Getting a loan with us requires only three steps!</p>
                    <p className={classes.faqDescription + " mt-1 fontWeight700"}>1.) Apply for a loan through one of the following options:</p>
                    <ul>
                        <li>Online application</li>
                        <li>Walk-in</li>
                        <li>WhatsApp (<a href={WHATSAPP_LINK} target="_blank"
                            rel="noreferrer noopener" className='textDeNone'>{NUMBER}</a> )</li>
                    </ul>
                    <p className={classes.faqDescription + " mt-1 fontWeight700"}>2.) Free Consultation and Signing of Agreement</p>
                    <p className={classes.faqDescription}>Consult with us at our office, present required documents (printable free of charge here) and sign the loan contract.</p>
                    <p className={classes.faqDescription + " mt-1 fontWeight700"}>3.) Receive Cash</p>
                    <p className={classes.faqDescription}>Get your cash on the spot.</p>
                </AccordionDetails>
            </Accordion>

            {/* Accordion3 */}
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className={classes.faqDiv}>
                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header" className={classes.faqItem}>
                    <p className={expanded === 'panel4' ? classes.faqTitle + " fontWeight700" : classes.faqTitle}>What documents will I need to provide?</p>
                </AccordionSummary>
                <AccordionDetails>
                    <p className={classes.faqDescription}>Your required documents will vary depending on whether you’re a Singaporean/PR or foreigner.</p>
                    <p className={classes.faqDescription + " mt-1"}>Singaporeans or PRs need to present the following:</p>
                    <ul>
                        <li>
                            NRIC
                        </li>
                        <li>
                            Singpass
                        </li>
                        <li>
                            If renting, provide both:
                            <ul>
                                <li>
                                    Your tenancy agreement
                                </li>
                                <li>
                                    Proof of address such as your phone bill or utility bill
                                </li>
                            </ul>
                        </li>
                        <li>
                            Payslips for the last three months, if available
                        </li>
                        <li>
                            Bank token
                        </li>
                    </ul>

                    <p className={classes.faqDescription}>Foreigners need to present the following:</p>
                    <ul>
                        <li>
                            S Pass / Employment Pass / Work Permit with a minimum 6-month validity
                        </li>
                        <li>
                            Passport
                        </li>
                        <li>
                            Residence information in the form of both:
                            <ul>
                                <li>
                                    Phone bill or utility bill
                                </li>
                                <li>
                                    Tenancy agreement
                                </li>
                            </ul>
                        </li>
                        <li>
                            Payslips for the last three months, if available
                        </li>
                        <li>
                            Bank token
                        </li>
                        <li>
                            Employment contract
                        </li>
                        <li>
                            Staff card
                        </li>
                    </ul>
                </AccordionDetails>
            </Accordion>
        </div>
    )
};

export default Faq;