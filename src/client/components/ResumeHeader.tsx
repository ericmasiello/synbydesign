import * as React from 'react';
import styled from 'styled-components';
import { COLORS } from '../styles/vars';
import Type3 from './Type3';
import Type5 from './Type5';

interface Props {
  ownerName: string;
  ownerTitle: string;
  lead: string;
  className?: string;
  tag?: Tag;
}

export const ResumeHeader: React.SFC<Props> = props => {
  const { tag: Tag, className, ownerName, ownerTitle, lead, ...rest } = props;
  return (
    // @ts-ignore
    <Tag className={className} {...rest}>
      <Type3 tag="h1" className="resume-header__name">
        {ownerName}
      </Type3>
      <Type5 tag="h2" className="resume-header__title">
        {ownerTitle}
      </Type5>
      <p className="resume-header__lead">{lead}</p>
    </Tag>
  );
};

ResumeHeader.defaultProps = {
  tag: 'hgroup',
};

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
