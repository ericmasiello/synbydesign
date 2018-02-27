import * as React from 'react';
import styled from 'styled-components';
import Tag from './Tag';

interface Props extends ProfessionalExperience {
  className?: string;
  tag?: Tag;
}

interface DefaultProps {
  tag: Tag;
}

export const ProfessionalExperience: React.SFC<Props> = props => {
  const {
    organization,
    roles,
    accomplishments,
    className,
    ...rest
  } = props as Props & DefaultProps;
  return (
    <Tag className={className} {...rest}>
      <hgroup>
        <h1>{organization}</h1>
        {roles.map(role => (
          <React.Fragment key={role.title}>
            <h2>{role.title}</h2>
            <p>
              {role.yearFrom} &mdash; {role.yearTo}
            </p>
          </React.Fragment>
        ))}
      </hgroup>
    </Tag>
  );
};

ProfessionalExperience.defaultProps = {
  tag: 'article',
} as DefaultProps;

ProfessionalExperience.displayName = 'ProfessionalExperience';

export default styled(ProfessionalExperience)``;
