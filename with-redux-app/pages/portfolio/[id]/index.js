import React, { useEffect } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import {
  setPortfolioItem,
  setPortfolioItemError,
  getPortfolioItemById,
  fetchPortfolioData,
} from '../../../store/portfolio';
import Layout from '../../../components/Layout';

function PortfolioDetail(props) {
  const { portfolioItem, error, getPortfolioItemById, id } = props;

  useEffect(() => {
    if (!portfolioItem && !error) {
      getPortfolioItemById(id);
    }
  }, [portfolioItem, getPortfolioItemById]);

  if (error) {
    return <p>Sorry there was an error loading your request {id}</p>;
  }

  if (!portfolioItem) {
    return (
      <Layout title={`Syn By Design: [Portfolio loading...]`}>
        <p>Loading...</p>
      </Layout>
    );
  }

  return (
    <Layout title={`Syn By Design: ${portfolioItem.title}`}>
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

  const portfolioItem = await fetchPortfolioData(id).catch(error => {
    reduxStore.dispatch(setPortfolioItemError(error));
  });

  if (portfolioItem) {
    reduxStore.dispatch(setPortfolioItem(portfolioItem));
  }

  return { id };
};

const mapStateToProps = (state, props) => {
  return {
    portfolioItem: state.portfolioItems.find(item => item.id === props.id),
    error: state.error,
  };
};

export default connect(
  mapStateToProps,
  { getPortfolioItemById },
)(PortfolioDetail);
