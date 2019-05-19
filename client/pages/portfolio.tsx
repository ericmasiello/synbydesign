import * as React from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import css from './test.css';
console.log(css);

interface StatelessPage<P = {}> extends React.SFC<P> {
  getInitialProps?: (ctx: any) => Promise<P>;
}

type Portfolio = {
  id: string;
  title: string;
  description: string;
};

type Props = { portfolioItem: Portfolio };

const PortfolioPage: StatelessPage<Props> = (props: Props) => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
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
  console.log(`Gonna fetch id: ${id}`);
  const res = await fetch(`http://localhost:4000/portfolio/${id}`);
  const portfolioItem = await res.json();

  console.log(`Fetched show: ${portfolioItem.title}`);

  return { portfolioItem };
};

export default PortfolioPage;
