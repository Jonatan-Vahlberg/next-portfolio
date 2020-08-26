import Head from 'next/head';
import Header from '../components/Header';
import colors from '../static/colors';
import HeroCover from '../components/HeroCover';
import { Navbar } from 'react-bootstrap';
import Layout from '../components/Layout';
import AboutContainer from '../components/about/AboutContainer';

export default function Home() {
  return (
    <div style={{ background: colors.background }}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          //@ts-ignore
          crossOrigin="anonymous"
        ></link>
      </Head>
      <Layout title="about" home>
        <AboutContainer />
      </Layout>
    </div>
  );
}
