import React from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { connect } from 'react-redux';
import { setPortfolioItem } from '../../../store/portfolio';
import Layout from '../../../components/Layout';

function PortfolioDetail(props) {
  const { portfolioItem, id } = props;

  if (!portfolioItem) {
    throw new Error(`Invalid page: ${id}`);
  }

  return (
    <Layout title={`Portfolio | ${portfolioItem.title}`}>
      <p>
        <Link href="/">
          <a>Home</a>
        </Link>
      </p>
      <h1>{portfolioItem.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: portfolioItem.description }} />
    </Layout>
  );
}

PortfolioDetail.getInitialProps = async function(context) {
  const { reduxStore } = context;
  const { id } = context.query;
  const res = await fetch(`${process.env.API}/portfolio/${id}`);
  const portfolioItem = await res.json();

  reduxStore.dispatch(setPortfolioItem(portfolioItem));

  return { id };
};

const mapStateToProps = (state, props) => {
  return {
    portfolioItem: state.portfolioItems.find(item => item.id === props.id),
  };
};

export default connect(mapStateToProps)(PortfolioDetail);
