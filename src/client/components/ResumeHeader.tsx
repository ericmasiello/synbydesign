import * as React from 'react';
import styled from 'styled-components';
import Tag from './Tag';

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
  const { tag, className, name, title, lead, ...rest } = props as Props &
    DefaultProps;
  return (
    <Tag tag={tag} className={className} {...rest}>
      <h1>{name}</h1>
      <h2>{title}</h2>
      <p>{lead}</p>
    </Tag>
  );
};

ResumeHeader.defaultProps = {
  tag: 'hgroup',
} as DefaultProps;

ResumeHeader.displayName = 'Resume.Header';

export default styled(ResumeHeader)``;
