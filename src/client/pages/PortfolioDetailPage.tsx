import * as React from 'react';
import styled from 'styled-components';
import { Store } from 'redux';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchPortfolioDetail } from '../actions';
import { ThunkActionCreator } from '../../types.d';
import PortfolioDetailImage from '../components/Portfolio/PortfolioDetailImage';
import Header from '../components/Header';
import { getImagePaths, getHighestPriorityImage } from '../utils/portfolioImage';
import { pxToRem } from '../styles/utils';

const gridItemSize = 300;

// const PortfolioDetailGalleryItem = styled.li`
//   grid-column: auto / span 4;

//   &:nth-child(2n),
//   &:nth-child(3n) {
//     grid-column: auto / span 6;
//   }

//   &:nth-child(4n) {
//     grid-column: auto / span 4;
//   }
// `;
const PortfolioDetailGalleryItem = styled.li`
`;

PortfolioDetailGalleryItem.displayName = 'PortfolioDetailGallery.Item';

interface PortfolioDetailGalleryProps {
  paths: string[];
  className?: string;
}

const PortfolioDetailGallery: React.SFC<PortfolioDetailGalleryProps> = (props) => {
  return (
    <ul className={props.className}>
      {props.paths.map(path => (
        <PortfolioDetailGalleryItem key={path}>
          <img src={path} alt="FIXME" />
        </PortfolioDetailGalleryItem>
      ))}
    </ul>
  );
};

const StyledPortfolioDetailGallery = styled(PortfolioDetailGallery)`
  display: grid;
  grid-template-columns: repeat(${props => `${props.paths.length}, ${100 / props.paths.length}%`});
  grid-auto-flow: dense;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

PortfolioDetailGallery.displayName = 'PortfolioDetailGallery';


interface Props {
  fetchPortfolioDetail: ThunkActionCreator<Portfolio>;
  className?: string;
  portfolio: Portfolio;
  match: {
    params: {
      id: string;
    };
  };
}

export class PortfolioDetailPage extends React.Component<Props, {}> {
  componentDidMount() {
    // TODO: only fetch if we don't have the data
    this.props.fetchPortfolioDetail(this.props.match.params.id);
  }

  getImagePaths(excludeImage: PortfolioImage) {
    let images = [excludeImage];
    // if there are more than 1 image, exclude duplicates
    if (this.props.portfolio.imagePaths.length > 1) {
      images = this.props.portfolio.imagePaths.filter(imagePath => imagePath !== excludeImage);
    }
    return images;
  }

  getDetailView(paths: PortfolioImage[]) {
    if (paths.length > 1) {
      return <StyledPortfolioDetailGallery paths={getImagePaths(paths)} />;
    }

    return (
      <PortfolioDetailImage
        imagePath={paths[0]}
      />
    );
  }

  render() {
    const featuredImage = getHighestPriorityImage(this.props.portfolio.imagePaths);
    const galleryImagesPaths = this.getImagePaths(featuredImage);

    return (
      <div className={this.props.className}>
        <Helmet>
          <title>{this.props.portfolio.title}</title>
          <meta property="og:title" content={this.props.portfolio.title} />
        </Helmet>
        <Header imagePath={featuredImage.originalUrl} />
        {this.getDetailView(galleryImagesPaths)}
      </div>
    );
  }
}

function mapStateToProps(state: AppState, props: Props) {
  return {
    portfolio: state.portfolioItems.find(item => item.id === props.match.params.id),
  };
}

const loadData = ({ dispatch }: Store<Portfolio>, { id }: { id: string }) =>
  dispatch(fetchPortfolioDetail(id));

export default {
  loadData,
  component: connect(mapStateToProps, { fetchPortfolioDetail })(PortfolioDetailPage),
};
