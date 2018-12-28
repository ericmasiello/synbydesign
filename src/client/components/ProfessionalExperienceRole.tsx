import * as React from 'react';
import styled from 'styled-components';
import TypeBase from './TypeBase';
import TypeSmall from './TypeSmall';
import Muted from './Muted';
import { TYPE_SIZE, COLORS } from '../styles/vars';
import { pxToRem } from '../styles/utils';

const TIMELINE_IN_MARGIN = '115rem';

export interface Props extends ProfessionalRole {
  className?: string;
}

const computeLineHeight = (size: TypeSize) => {
  return pxToRem(size[0] * size[1]);
};

const getTimeline = (yearFrom: string, yearTo: string = 'Present') => (
  <TypeSmall tag={Muted} className="role__timeline">
    <span className="role__parentheses">(</span>
    {yearFrom} &mdash; {yearTo}
    <span className="role__parentheses">)</span>
  </TypeSmall>
);

export const ProfessionalExperienceRole: React.SFC<Props> = props => {
  const { className, title, yearFrom, yearTo, ...rest } = props;
  return (
    <div className={className} {...rest}>
      <TypeBase tag="h2" className="role__title">
        {title} {getTimeline(yearFrom, yearTo)}
      </TypeBase>
    </div>
  );
};

ProfessionalExperienceRole.displayName = 'ProfessionalExperience.Role';

export default styled(ProfessionalExperienceRole)`
  position: relative;

  .role__title {
    color: ${COLORS.highlight};
    margin-bottom: 0.25rem;
  }

  &:nth-last-of-type(1) {
    .role__title {
      margin-bottom: 0.5rem;
    }
  }

  .role__parentheses {
    @media (min-width: ${TIMELINE_IN_MARGIN}) {
      display: none;
    }
  }

  .role__timeline {
    @media (min-width: ${TIMELINE_IN_MARGIN}) {
      position: absolute;
      top: 0;
      left: -1rem;
      transform: translateX(-100%);
      line-height: ${computeLineHeight(TYPE_SIZE.base)};
    }
  }
`;
