import * as React from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import { connect } from 'react-redux';
import { bar, baz } from '../store';

interface StatelessPage<P = {}> extends React.SFC<P> {
  getInitialProps?: (ctx: any) => Promise<P>;
}

type Props = { portfolioItems: Portfolio[] };

const IndexPage: StatelessPage<Props> = (props: Props) => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <h1>Portfolio</h1>
      <ul>
        {props.portfolioItems.map(portfolioItem => (
          <li key={portfolioItem.id}>
            <Link
              as={`/portfolio/${portfolioItem.id}`}
              href={`/portfolio?id=${portfolioItem.id}`}
            >
              <a>{portfolioItem.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

IndexPage.getInitialProps = async function({ reduxStore }) {
  reduxStore.dispatch(bar);

  const res = await fetch(`${process.env.API}/portfolio`);
  const data = await res.json();

  return {
    portfolioItems: data,
  };
};

export default connect(
  null,
  { bar, baz },
)(IndexPage);
