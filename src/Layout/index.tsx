/* eslint-disable import/no-unresolved */
import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

type Props = {
  children: ReactNode;
};
function Layout(props: Props) {
  const { children } = props;
  return (
    <div>
      {' '}
      <div>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Navigation />
          <div className="main_content">{children}</div>
          <Footer />
        </body>
      </div>
    </div>
  );
}

export default Layout;
