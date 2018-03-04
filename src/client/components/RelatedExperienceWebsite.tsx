import * as React from 'react';
import styled from 'styled-components';

interface Props extends Website {
  className?: string;
}

interface DefaultProps {
  disabled: boolean;
}

export const RelatedExperienceWebsite: React.SFC<Props> = props => {
  const { title, url, disabled, ...rest } = props as Props & DefaultProps;

  if (disabled) {
    return <span {...rest}>{title || url}</span>;
  }
  return (
    <a href={url} {...rest}>
      {title || url}
    </a>
  );
};

RelatedExperienceWebsite.defaultProps = {
  disabled: false,
} as DefaultProps;

RelatedExperienceWebsite.displayName = 'RelatedExperience.Website';

export default styled(RelatedExperienceWebsite)``;
