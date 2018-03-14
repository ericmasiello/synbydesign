import * as React from 'react';
import styled from 'styled-components';
import Tag from './Tag';

interface Props extends Education {
  className?: string;
  tag?: Tag;
}

interface DefaultProps {}

export const EducationExperience: React.SFC<Props> = props => {
  const {
    className,
    institution,
    location,
    year,
    degree,
    ...rest
  } = props as Props & DefaultProps;
  return (
    <Tag className={className} {...rest}>
      <h1>{institution}</h1>
      <div>
        {location && <p>{location}</p>}
        {year && <span>{year}</span>}
      </div>
      {degree && <p>{degree}</p>}
    </Tag>
  );
};

export default styled(EducationExperience)``;
