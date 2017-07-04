import { Media, MediaContent, MediaLeft, MediaRight } from 'bloomer';
import gravaturl from '../gravatar';

const PresentationLink = ({ url, title }, idx) => (
    <li key={idx}><a href={url}>{title}</a></li>
);

const Presentation = ({ title, name, url, synopsis, links, email }) => (
    <Media key={name}>
        <MediaLeft>
            <img src={gravaturl(email)}/>
        </MediaLeft>
        <MediaContent>
            <h3 className="title is-3">{ title }</h3>
            <h4 className="subtitle is-5"><a href="{url}">{ name }</a></h4>
            <p dangerouslySetInnerHTML={{ __html: synopsis }}></p>
            <ul>{ links.map(PresentationLink) }</ul>
        </MediaContent>
    </Media>
);

export default Presentation;
