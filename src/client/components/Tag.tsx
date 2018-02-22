import * as React from 'react';

interface Props {
  tag?: string;
  className?: string;
}

const Tag: React.SFC<Props> = props => {
  const { tag: Tag = 'span', className, children, ...rest } = props;
  return (
    <Tag className={className} {...rest}>
      {children}
    </Tag>
  );
};

export default Tag;
