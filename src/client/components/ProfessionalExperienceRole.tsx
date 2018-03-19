import * as React from 'react';
import styled from 'styled-components';

export interface Props extends ProfessionalRole {
  className?: string;
}

function getTimeline(yearFrom: string, yearTo: string = 'Present') {
  return (
    <p>
      {yearFrom} &mdash; {yearTo}
    </p>
  );
}

export const ProfessionalExperienceRole: React.SFC<Props> = props => {
  const { className, title, yearFrom, yearTo, ...rest } = props;
  return (
    <div className={className} {...rest}>
      <h2>{title}</h2>
      {getTimeline(yearFrom, yearTo)}
    </div>
  );
};

ProfessionalExperienceRole.displayName = 'ProfessionalExperience.Role';

export default styled(ProfessionalExperienceRole)``;
