import * as React from 'react';
import styled, { StyledComponentClass } from 'styled-components';
import { type } from '../styles/mixins';

export interface Props {
  className?: string;
  tag: Tag;
}

interface ReturnType {
  Type: React.StatelessComponent<Props>;
  StyledType: StyledComponentClass<
    Props,
    any,
    Pick<Props, keyof Props> & {
      theme?: any;
    }
  >;
}

export default function makeTypeComponent(typeSize: TypeSize): ReturnType {
  const Type: React.SFC<Props> = props => {
    const { tag: Tag, className, children, ...rest } = props;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  };

  Type.displayName = `Type(${typeSize})`;

  const StyledType = styled(Type)`
    ${type(typeSize)};
  `;

  return {
    Type,
    StyledType,
  };
}
