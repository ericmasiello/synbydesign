import * as React from 'react';
import styled from 'styled-components';
import Tag from './Tag';
import RelatedExperienceWebsite from './RelatedExperienceWebsite';

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
        <h1>
          <span dangerouslySetInnerHTML={{ __html: title }} />{' '}
          {role.yearFrom && <React.Fragment>({role.yearFrom})</React.Fragment>}
        </h1>
        {meta && <p>{meta}</p>}
        <h2>{role.title}</h2>
        {website && <RelatedExperienceWebsite {...website} />}
      </hgroup>
      {accomplishments.length > 0 && (
        <section>
          <ul>
            {accomplishments.map(accomplishment => (
              <li key={accomplishment}>{accomplishment}</li>
            ))}
          </ul>
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

export default styled(RelatedExperience)``;
