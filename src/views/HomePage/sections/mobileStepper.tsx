import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import { StepIconProps } from '@mui/material/StepIcon';
import Avatar from '@mui/material/Avatar';
import Apply from "../../../assets/Images/apply.png";
import Sign from "../../../assets/Images/sign.png";
import Give from "../../../assets/Images/give.png";
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import homeStyle from '../../../assets/Home';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { WHATSAPP_LINK } from '../../../constant';

const useStyle = makeStyles(homeStyle);
export default function MobileStepper() {
    const classes = useStyle();
    const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
        [`&.${stepConnectorClasses.alternativeLabel}`]: {
            top: 80,
            //zIndex: -1,
        },
        [`&.${stepConnectorClasses.active}`]: {
            [`& .${stepConnectorClasses.line}`]: {
                backgroundColor: '#c7c7c7',
            },
        },
        [`&.${stepConnectorClasses.completed}`]: {
            [`& .${stepConnectorClasses.line}`]: {
                backgroundColor: '#c7c7c7',
            },
        },
        [`& .${stepConnectorClasses.line}`]: {
            height: 100,
            border: 0,
            backgroundColor: '#c7c7c7',
            borderRadius: 1,
            width: "3px",
            marginLeft: "5.5rem"
        },
    }));

    const ColorlibStepIcon = (props: StepIconProps) => {
        const { className } = props;
        const icons: { [index: string]: React.ReactElement } = {
            1: <Avatar src={Apply} sx={{ width: 200, height: 200 }} className="zIndex1" />,
            2: <Avatar src={Sign} sx={{ width: 200, height: 200 }} className="zIndex1" />,
            3: <Avatar src={Give} sx={{ width: 200, height: 200 }} className="zIndex1" />,
        };

        return (
            <>
                <div className={className}>
                    {icons[String(props.icon)]}
                </div>
            </>
        );
    }

    return (
        <Box sx={{ maxWidth: 400 }}>
            <Stepper activeStep={3} orientation="vertical" connector={<ColorlibConnector />}>
                <Step>
                    <StepLabel StepIconComponent={ColorlibStepIcon}>
                        <p className={classes.stepperMainText + " mb-0"}>Apply</p>
                        <div className={classes.whatsAppDiv}>
                            <WhatsAppIcon />
                            <p className={classes.stepperSubText + " pl-1"}>Apply via <a href={WHATSAPP_LINK} className={classes.whatsAppLink} target="_blank"
                                rel="noreferrer noopener">WhatsApp</a></p>
                        </div>
                    </StepLabel>
                </Step>
                <Step>
                    <StepLabel StepIconComponent={ColorlibStepIcon}>
                        <p className={classes.stepperMainText}>Free Consultation and
                            Signing of Agreement</p>
                        <p className={classes.stepperSubText}>Consult with us at our office, present required documents and sign the loan contract</p>
                    </StepLabel>
                </Step>
                <Step >
                    <StepLabel StepIconComponent={ColorlibStepIcon}>
                        <p className={classes.stepperMainText}>Receive Cash</p>
                        <p className={classes.stepperSubText}>Get your cash on the spot with trusted & licensed money lender Singapore!</p>
                    </StepLabel>
                </Step>
            </Stepper>
        </Box>
    );
}