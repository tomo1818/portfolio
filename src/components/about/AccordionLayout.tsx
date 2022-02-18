import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import styles from '../../styles/About.module.scss';

type Props = {
  question: string;
  answer: string;
}

export const AccordionLayout = ({question, answer}: Props) => {
  return (
    <>
      <Accordion className={styles.l_accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography className={styles.l_accordion__text}>{question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.l_accordion__text}>{answer}</Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};
