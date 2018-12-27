import * as React from 'react';
import styled from 'styled-components';
import { COLORS } from '../styles/vars';
import { pxToRem } from '../styles/utils';

export const HeartIcon = styled.svg`
  height: ${pxToRem(30)};
  width: ${pxToRem(30)};
  fill: transparent;
  stroke: ${COLORS.highlight};
  transition-property: fill, transform, filter;
  transition: 0.3s;
`;

HeartIcon.displayName = 'HeartIcon';

interface Props extends React.HTMLProps<HTMLButtonElement> {
  tag?: Tag;
  selected?: boolean;
  className?: string;
}

export const Heart: React.SFC<Props> = props => {
  const { className, tag: Tag, children, ...rest } = props;
  return (
    // @ts-ignore
    <Tag className={className} {...rest}>
      <HeartIcon viewBox="-4.75 11.781 10.5 9.5">
        <path
          strokeWidth="0.75"
          strokeMiterlimit="10"
          d="M-1.7,12.148c-1.587,0-2.664,1.455-2.664,3.059
	c0,2.748,2.136,3.881,4.864,5.645c2.729-1.764,4.864-2.896,4.864-5.645c0-1.604-1.077-3.059-2.664-3.059
	c-1.021,0-1.86,0.572-2.2,0.916C0.16,12.721-0.679,12.148-1.7,12.148z"
        />
      </HeartIcon>
    </Tag>
  );
};

Heart.displayName = 'Heart';

Heart.defaultProps = {
  tag: 'button',
};

export default styled(Heart)`
  display: inline-flex;
  border: none;
  background: none;
  padding: ${pxToRem(10)};

  ${HeartIcon} {
    ${props => (props.selected ? `fill: ${COLORS.highlight}` : '')};
  }

  &:hover,
  &:focus,
  &:active {
    ${HeartIcon} {
      fill: ${COLORS.highlight};
      transform: scale(1.2);
      filter: contrast(1.5);
    }
  }

  &:active {
    ${HeartIcon} {
      transform: scale(1.5);
    }
  }
`;
