import * as React from 'react';

interface Props {
  tag?: Tag;
  className?: string;
}

const DynamicTag: React.SFC<Props> = props => {
  const { tag: Tag = 'span', className, children, ...rest } = props;
  return (
    <Tag className={className} {...rest}>
      {children}
    </Tag>
  );
};

DynamicTag.displayName = 'DynamicTag';

export default DynamicTag;
