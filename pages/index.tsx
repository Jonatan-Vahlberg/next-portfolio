import Head from 'next/head';
import Header from '../components/Header';
import colors from '../static/colors';
import HeroCover from '../components/HeroCover';
import { Navbar } from 'react-bootstrap';
import Layout from '../components/Layout';
import AboutContainer from '../components/AboutContainer';

export default function Home() {
  return (
    <div style={{ background: colors.background }}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title="about" home>
        <AboutContainer />
      </Layout>
    </div>
  );
}
