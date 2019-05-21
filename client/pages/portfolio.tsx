import * as React from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import './test.css';

interface StatelessPage<P = {}> extends React.SFC<P> {
  getInitialProps?: (ctx: any) => Promise<P>;
}

type Props = { portfolioItem: Portfolio };

const PortfolioPage: StatelessPage<Props> = (props: Props) => {
  return (
    <Layout title={`Portfolio | ${props.portfolioItem.title}`}>
      <p>
        <Link href="/">
          <a>Home</a>
        </Link>
      </p>
      <h1>{props.portfolioItem.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: props.portfolioItem.description }}
      />
    </Layout>
  );
};

PortfolioPage.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`${process.env.API}/portfolio/${id}`);
  const portfolioItem = await res.json();

  return { portfolioItem };
};

export default PortfolioPage;
