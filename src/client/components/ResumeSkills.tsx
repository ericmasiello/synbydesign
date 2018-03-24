import * as React from 'react';
import styled from 'styled-components';
import { pxToRem } from '../styles/utils';

interface Props {
  skills?: string[];
  className?: string;
  tag?: Tag;
}

interface DefaultProps {
  skills: string[];
  tag: Tag;
}

export const ResumeSkills: React.SFC<Props> = props => {
  const { tag: Tag, skills, className, ...rest } = props as Props &
    DefaultProps;
  return (
    <Tag className={className} {...rest}>
      {skills.map(skill => <li key={skill}>{skill}</li>)}
    </Tag>
  );
};

ResumeSkills.defaultProps = {
  skills: [],
  tag: 'ul',
} as DefaultProps;

ResumeSkills.displayName = 'Resume.Skills';

const bulletSpace = pxToRem(15);

export default styled(ResumeSkills)`
  list-style-type: none;
  margin: 0;
  padding: 0;

  > li {
    position: relative;
    display: inline-block;

    &:not(:first-child) {
      padding-left: ${bulletSpace};

      &::before {
        content: '\00B7';
        position: absolute;
        width: ${bulletSpace};
        top: 0;
        left: 0;
        bottom: 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 180%;
      }
    }
  }
`;
