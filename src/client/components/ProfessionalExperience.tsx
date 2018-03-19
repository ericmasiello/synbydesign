import * as React from 'react';
import styled from 'styled-components';
import Tag from './Tag';
import ProfessionalExperienceRole from './ProfessionalExperienceRole';

interface Props extends ProfessionalExperience {
  className?: string;
  tag?: Tag;
}

interface DefaultProps {
  tag: Tag;
  accomplishments: string[];
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
        <ProfessionalExperienceRole roles={roles} />
      </hgroup>
      {accomplishments.length > 0 && (
        <section>
          <ul>
            {accomplishments.map(accomplishment => (
              <li key={accomplishment}>{accomplishment}</li>
            ))}
          </ul>
        </section>
      )}
    </Tag>
  );
};

ProfessionalExperience.defaultProps = {
  tag: 'article',
  accomplishments: [],
} as DefaultProps;

ProfessionalExperience.displayName = 'ProfessionalExperience';

export default styled(ProfessionalExperience)``;
