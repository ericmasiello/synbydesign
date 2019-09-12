import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { setPortfolioItems, fetchPortfolioItems, fetchPortfolioData } from '../store/portfolio'
import Layout from '../components/Layout';
import Hero from '../components/Hero';

function Index(props) {
  const { fetchPortfolioItems, portfolioItems } = props;
  useEffect(() => {
    fetchPortfolioItems();
  }, [fetchPortfolioItems]);

  return (
    <Layout title="Home | Syn By Design: Eric Masiello's Portfolio">
      <h1>Hello world function</h1>
      <ul>
        {portfolioItems.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </Layout>
  );
}

Index.getInitialProps = async ({ reduxStore }) => {
  // DISPATCH ACTIONS HERE ONLY WITH `reduxStore.dispatch`
  const items = await fetchPortfolioData();

  reduxStore.dispatch(setPortfolioItems(items));
  return {}
};

const mapStateToProps = (state) => {
  return {
    portfolioItems: state.portfolioItems,
  };
}
export default connect(
  mapStateToProps,
  { fetchPortfolioItems }
)(Index)
