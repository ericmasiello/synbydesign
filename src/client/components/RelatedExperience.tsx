import * as React from 'react';
import styled from 'styled-components';
import RelatedExperienceWebsite from './RelatedExperienceWebsite';
import PlainList from './PlainList';
import TypeBase from './TypeBase';
import TypeSmall from './TypeSmall';
import Muted from './Muted';
import { COLORS, HEADER_WEIGHTS } from '../styles/vars';

export interface Props extends RelatedExperience {
  className?: string;
  tag?: Tag;
}

interface DefaultProps {
  tag: Tag;
  accomplishments: string[];
}

export const RelatedExperience: React.SFC<Props> = props => {
  const {
    tag: Tag,
    title,
    meta,
    role,
    website,
    accomplishments,
    className,
    ...rest
  } = props as Props & DefaultProps;
  return (
    <Tag className={className} {...rest}>
      <hgroup>
        <TypeBase tag="h1" data-title className="related-experience__title">
          <span
            className="related-experience__title__content"
            data-title-content
            dangerouslySetInnerHTML={{ __html: title }}
          />{' '}
          {role.yearFrom && (
            <TypeSmall tag={Muted}>({role.yearFrom})</TypeSmall>
          )}
        </TypeBase>
        {meta && (
          <TypeSmall tag="p" data-meta className="related-experience__meta">
            {meta}
          </TypeSmall>
        )}
        <TypeBase tag="h2" data-role-title className="related-experience__role">
          {role.title}
        </TypeBase>
        {website && (
          <RelatedExperienceWebsite
            {...website}
            className="related-experience__website"
          />
        )}
      </hgroup>
      {accomplishments.length > 0 && (
        <section>
          <PlainList>
            {accomplishments.map(accomplishment => (
              <li key={accomplishment}>{accomplishment}</li>
            ))}
          </PlainList>
        </section>
      )}
    </Tag>
  );
};

RelatedExperience.defaultProps = {
  tag: 'article',
  accomplishments: [],
} as DefaultProps;

RelatedExperience.displayName = 'RelatedExperience';

export default styled(RelatedExperience)`
  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }

  .related-experience__title {
    margin-bottom: 0;
  }

  .related-experience__title__content {
    font-weight: ${HEADER_WEIGHTS.bold};
  }

  .related-experience__meta {
    margin-bottom: 0;
  }

  .related-experience__role {
    color: ${COLORS.highlight};
    margin-bottom: 0.5rem;
  }

  .related-experience__website {
    display: block;
    margin-bottom: 0.5rem;
  }
`;
