import { Box, useTheme } from '@mui/material';
import Header from '../../components/Header';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from '../../theme';

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non expedita soluta sapiente nobis modi culpa. Nam perspiciatis accusantium quia explicabo corporis optio quos eum dolores!
            Debitis maiores, cumque dolorem iste assumenda temporibus. Repellendus nihil libero error, assumenda nostrum, maxime dolorum ipsum neque dolor ad obcaecati. Expedita aspernatur voluptatum
            quisquam reiciendis!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non expedita soluta sapiente nobis modi culpa. Nam perspiciatis accusantium quia explicabo corporis optio quos eum dolores!
            Debitis maiores, cumque dolorem iste assumenda temporibus. Repellendus nihil libero error, assumenda nostrum, maxime dolorum ipsum neque dolor ad obcaecati. Expedita aspernatur voluptatum
            quisquam reiciendis!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Your Favorite Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non expedita soluta sapiente nobis modi culpa. Nam perspiciatis accusantium quia explicabo corporis optio quos eum dolores!
            Debitis maiores, cumque dolorem iste assumenda temporibus. Repellendus nihil libero error, assumenda nostrum, maxime dolorum ipsum neque dolor ad obcaecati. Expedita aspernatur voluptatum
            quisquam reiciendis!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Some Random Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non expedita soluta sapiente nobis modi culpa. Nam perspiciatis accusantium quia explicabo corporis optio quos eum dolores!
            Debitis maiores, cumque dolorem iste assumenda temporibus. Repellendus nihil libero error, assumenda nostrum, maxime dolorum ipsum neque dolor ad obcaecati. Expedita aspernatur voluptatum
            quisquam reiciendis!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            The Final Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non expedita soluta sapiente nobis modi culpa. Nam perspiciatis accusantium quia explicabo corporis optio quos eum dolores!
            Debitis maiores, cumque dolorem iste assumenda temporibus. Repellendus nihil libero error, assumenda nostrum, maxime dolorum ipsum neque dolor ad obcaecati. Expedita aspernatur voluptatum
            quisquam reiciendis!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
