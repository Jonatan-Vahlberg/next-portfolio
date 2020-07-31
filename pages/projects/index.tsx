import Head from 'next/head';
import Header from '../../components/Header';
import colors from '../../static/colors';
import HeroCover from '../../components/HeroCover';
import { Navbar } from 'react-bootstrap';
import Layout from '../../components/Layout';
import ProjectsContainer from '../../components/ProjectsContainer';

export default function Projects() {
  return (
    <div style={{ background: colors.background }}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title="projects" home={false}>
        <ProjectsContainer />
      </Layout>
    </div>
  );
}
