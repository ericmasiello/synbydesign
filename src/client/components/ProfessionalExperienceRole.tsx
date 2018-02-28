import * as React from 'react';
import styled from 'styled-components';

interface Props {
  roles?: ProfessionalRole[];
}

interface DefaultProps {
  roles: ProfessionalRole[];
}

function getTimeline(yearFrom: string, yearTo: string = 'Present') {
  return (
    <p>
      {yearFrom} &mdash; {yearTo}
    </p>
  );
}

export const ProfessionalExperienceRole: React.SFC<Props> = props => {
  const { roles } = props as Props & DefaultProps;
  return (
    <React.Fragment>
      {roles.map(role => (
        <React.Fragment key={role.title}>
          <h2>{role.title}</h2>
          {getTimeline(role.yearFrom, role.yearTo)}
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

ProfessionalExperienceRole.defaultProps = {
  roles: [] as ProfessionalRole[],
} as DefaultProps;

ProfessionalExperienceRole.displayName = 'ProfessionalExperience.Role';

export default styled(ProfessionalExperienceRole)``;
