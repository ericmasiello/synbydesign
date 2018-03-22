import * as React from 'react';
import styled from 'styled-components';

export interface Props extends Education {
  className?: string;
  tag?: Tag;
}

interface DefaultProps {
  tag: Tag;
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

EducationExperience.defaultProps = {
  tag: 'section',
} as DefaultProps;

export default styled(EducationExperience)``;
