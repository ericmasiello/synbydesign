import * as React from 'react';

interface Props {
  className?: string;
  imagePath: string;
  featured?: boolean;
  size?: string;
  position?: string;
}

const PortfolioDetailImage: React.SFC<Props> = (props) => {
  return <div>Detail</div>;
};

export default PortfolioDetailImage;
