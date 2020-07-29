import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Head from 'next/head';
import Link from 'next/link';
import Header from './Header';
import HeroCover from './HeroCover';
import Footer from './Footer';

const name = 'Jonatan Vahlberg';
export const siteTitle = 'Next.js Sample Website';

const Layout: React.FC<{ home: boolean }> = ({ children, home }) => {
  return (
    <div className={styles.main}>
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
      <Header selectedPage="about" name={name} />
      <main>
        <HeroCover />
        <div className={styles.contentContainer}>{children}</div>
      </main>
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
