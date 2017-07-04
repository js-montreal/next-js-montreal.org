import Presentation from './Presentation.js';
import { Container, Box  } from 'bloomer';

const Meetup = ({ num, title, on, speakers  }) => (
    <Box key={ on }>
        <h2>{ title }</h2>
        { speakers.map(Presentation) }
    </Box>
);

export default Meetup;
