import * as React from 'react';
import styled from 'styled-components';
import { type, scaleToRem } from '../styles/utils';
import { COLORS, TYPE_SIZE } from '../styles/vars';

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
      <h1 className="name">{name}</h1>
      <h2 className="title">{title}</h2>
      <p className="lead">{lead}</p>
    </Tag>
  );
};

ResumeHeader.defaultProps = {
  tag: 'hgroup',
} as DefaultProps;

ResumeHeader.displayName = 'Resume.Header';

export default styled(ResumeHeader)`
  .name {
    ${type(TYPE_SIZE.t3)};
    margin-bottom: 0;
  }

  .title {
    ${type(TYPE_SIZE.t5)};
    margin-top: 0;
    margin-bottom: ${scaleToRem(0.25)};
    color: ${COLORS.highlight};
  }

  .lead {
    margin-top: 0;
  }
`;
