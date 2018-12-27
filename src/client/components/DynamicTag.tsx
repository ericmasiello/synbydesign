import * as React from 'react';

interface Props extends React.HTMLProps<HTMLDivElement> {
  tag?: Tag;
}

const DynamicTag: React.SFC<Props> = props => {
  const { tag: Tag = 'span', className, children, ...rest } = props;
  return (
    // @ts-ignore
    <Tag className={className} {...rest}>
      {children}
    </Tag>
  );
};

DynamicTag.displayName = 'DynamicTag';

export default DynamicTag;
