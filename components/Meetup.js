import Presentation from './Presentation.js';
import { Box, Columns, Column, Container  } from 'bloomer';

const Meetup = ({ num, title, on, speakers  }) => (
    <Container key={ on }>
        <h2 className="title is-2">{ title }</h2>
        <Columns>
            <Column><Presentation {...speakers[0]}/></Column>
            { speakers[1] && <Column><Presentation {...speakers[1]}/></Column>}
        </Columns>
    </Container>
);

export default Meetup;
