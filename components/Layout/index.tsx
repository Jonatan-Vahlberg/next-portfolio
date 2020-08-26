import styles from './Layout.module.sass';
import utilStyles from '../../styles/utils.module.css';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../Header/Header';
import HeroCover from '../HeroCover';
import Footer from '../Footer';

const name = 'Jonatan Vahlberg';
export const siteTitle = 'Next.js Sample Website';

const Layout: React.FC<{ home: boolean; title: string }> = ({ children, home, title }) => {
  return (
    <div className={styles.main + ' container-fluid p-0'}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn how to build a personal website using node.js" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header selectedPage={title} name={name} />
      <div className="" style={{ width: '100vw' }}>
        <HeroCover />
        <div className={`p-2 p-sm-5 ${styles.contentContainer}`}>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
// {!home && (
//   <div className={styles.backToHome}>
//     <Link href="/">
//       <a>← Back to home</a>
//     </Link>
//   </div>
// )}
