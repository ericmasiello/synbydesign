import * as React from 'react';
import styled from 'styled-components';

export interface Props extends Website {
  className?: string;
}

interface DefaultProps {
  disabled: boolean;
}

export const RelatedExperienceWebsite: React.SFC<Props> = props => {
  const { title, url, disabled, ...rest } = props as Props & DefaultProps;
  const Tag = disabled ? 'span' : 'a';
  const tagProps = {
    href: !disabled ? url : undefined,
  };

  return (
    <Tag {...tagProps} {...rest}>
      {title || url}
    </Tag>
  );
};

RelatedExperienceWebsite.defaultProps = {
  disabled: false,
} as DefaultProps;

RelatedExperienceWebsite.displayName = 'RelatedExperience.Website';

export default styled(RelatedExperienceWebsite)``;
