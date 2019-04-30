import * as React from 'react';
import styled from 'styled-components';
import Muted from './Muted';
import TypeSmall from './TypeSmall';
import TypeBase from './TypeBase';
import { HEADER_WEIGHTS } from '../styles/vars';

export interface Props extends Education {
  className?: string;
  tag?: Tag;
}

export const EducationExperience: React.SFC<Props> = props => {
  const {
    tag: Tag,
    className,
    institution,
    location,
    year,
    degree,
    ...rest
  } = props as Props;
  return (
    // @ts-ignore
    <Tag className={className} {...rest}>
      <TypeBase tag="h1" className="education__title">
        {institution}
        <div className="education__meta" data-meta>
          {location && <>{`${location} `}</>}
          {year && (
            <TypeSmall tag={Muted} data-year>
              ({year})
            </TypeSmall>
          )}
        </div>
      </TypeBase>
      {degree && <p data-degree>{degree}</p>}
    </Tag>
  );
};

EducationExperience.defaultProps = {
  tag: 'section',
};

export default styled(EducationExperience)`
  .education__title {
    font-weight: ${HEADER_WEIGHTS.bold};
  }

  .education__meta {
    font-weight: ${HEADER_WEIGHTS.medium};
  }
`;
