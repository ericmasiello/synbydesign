import * as React from 'react';
import styled from 'styled-components';
import TypeBase from './TypeBase';
import TypeSmall from './TypeSmall';
import { TYPE_SIZE, COLORS } from '../styles/vars';
import { pxToRem } from '../styles/utils';

export interface Props extends ProfessionalRole {
  className?: string;
}

const computeLineHeight = (size: TypeSize) => {
  return pxToRem(size[0] * size[1]);
};

const getTimeline = (yearFrom: string, yearTo: string = 'Present') => (
  <TypeSmall tag="p" className="role__timeline">
    {yearFrom} &mdash; {yearTo}
  </TypeSmall>
);

export const ProfessionalExperienceRole: React.SFC<Props> = props => {
  const { className, title, yearFrom, yearTo, ...rest } = props;
  return (
    <div className={className} {...rest}>
      <TypeBase tag="h2" className="role__title">
        {title}
      </TypeBase>
      {getTimeline(yearFrom, yearTo)}
    </div>
  );
};

ProfessionalExperienceRole.displayName = 'ProfessionalExperience.Role';

export default styled(ProfessionalExperienceRole)`
  position: relative;

  .role__title {
    color: ${COLORS.highlight};
    margin-bottom: 0.5rem;
  }

  .role__timeline {
    position: absolute;
    top: 0;
    left: -1rem;
    transform: translateX(-100%);
    line-height: ${computeLineHeight(TYPE_SIZE.base)};
  }
`;
