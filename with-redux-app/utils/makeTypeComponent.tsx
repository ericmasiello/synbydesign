// import * as React from 'react';
// import styled, { StyledComponent } from 'styled-components';
// import { type, scalableType } from '../styles/mixins';

// export interface Props extends React.HTMLProps<HTMLDivElement> {
//   className?: string;
//   tag: Tag;
//   scale?: boolean;
// }

// interface ReturnType {
//   Type: React.StatelessComponent<Props>;
//   StyledType: StyledComponent<
//     React.FunctionComponent<Props>,
//     any,
//     Pick<Props, keyof Props> & {
//       theme?: any;
//     }
//   >;
// }

// export default function makeTypeComponent(typeSize: TypeSize): ReturnType {
//   const Type: React.SFC<Props> = props => {
//     const { tag: Tag, className, scale, children, ...rest } = props;
//     return (
//       // @ts-ignore
//       <Tag className={className} {...rest}>
//         {children}
//       </Tag>
//     );
//   };

//   Type.displayName = `Type(${typeSize})`;

//   const StyledType = styled(Type)`
//     ${props => (props.scale ? scalableType(typeSize) : type(typeSize))};
//   `;

//   return {
//     Type,
//     StyledType,
//   };
// }