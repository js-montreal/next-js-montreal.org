import Layout from  "../components/Layout.js";
import fetch from "isomorphic-unfetch";
import Meetup from "../components/Meetup.js";

const Home = ({ meetups }) => (
  <Layout>
    <h1>JS-MONTREAL</h1>
    { meetups.map(Meetup) }
  </Layout>
);

Home.getInitialProps = async ({ req, res }) => {
    const meetups = await fetch('http://localhost:3000/static/data/meetups.json');
    const json = await meetups.json();
    console.log(`Meetups data fetched. Count: ${json.length}`)
    return { meetups: json };
};

export default Home;
