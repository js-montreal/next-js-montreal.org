const PresentationLink = ({ url, title }, idx) => (
    <li key={idx}><a href="{url}">{title}</a></li>
);

const Presentation = ({ title, name, url, synopsis, links }) => (
    <div key={name}>
        <h3>{ title }</h3>
        <a href="{url}">{ name }</a>
        <p dangerouslySetInnerHTML={{ __html: synopsis }}></p>
        <ul>{ links.map(PresentationLink) }</ul>
    </div>
);

export default Presentation;
