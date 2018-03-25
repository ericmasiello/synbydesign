import * as React from 'react';
import styled from 'styled-components';
import { COLORS } from '../styles/vars';
import Type3 from './Type3';
import Type5 from './Type5';

interface Props {
  name: string;
  title: string;
  lead: string;
  className?: string;
  tag?: Tag;
}

interface DefaultProps {
  tag: Tag;
}

export const ResumeHeader: React.SFC<Props> = props => {
  const { tag: Tag, className, name, title, lead, ...rest } = props as Props &
    DefaultProps;
  return (
    <Tag className={className} {...rest}>
      <Type3 tag="h1" className="resume-header__name">
        {name}
      </Type3>
      <Type5 tag="h2" className="resume-header__title">
        {title}
      </Type5>
      <p className="resume-header__lead">{lead}</p>
    </Tag>
  );
};

ResumeHeader.defaultProps = {
  tag: 'hgroup',
} as DefaultProps;

ResumeHeader.displayName = 'Resume.Header';

export default styled(ResumeHeader)`
  .resume-header__name {
    margin-bottom: 0;
  }

  .resume-header__title {
    margin-bottom: 0.25rem;
    color: ${COLORS.highlight};
  }
`;
