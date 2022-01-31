import styled from 'styled-components';

export enum FlexAlignment {
  Center = 'center',
  SpaceBetween = 'space-between',
  FlexStart = 'flex-start',
  FlexEnd = 'flex-end',
  SpaceEvenly = 'space-evenly',
  SpaceAround = 'space-around',
}

export enum FlexDirection {
  Row = 'row',
  Column = 'column',
  RowReverse = 'row-reverse',
}

export enum FlexWrap {
  Wrap = 'wrap',
}

export interface FlexBoxProps {
  readonly flexDirection: FlexDirection;
  readonly flex?: number;
  readonly alignItems?: FlexAlignment;
  readonly justifyContent?: FlexAlignment;
  readonly backgroundColor?: string;
  readonly grow?: boolean;
  readonly width?: string | number;
  readonly height?: string | number;
  readonly flexWrap?: FlexWrap;
  readonly onPress?: () => void;
}

const FlexBox = styled.div<FlexBoxProps>`
  display: flex;
  z-index: auto;
  flex-direction: ${({ flexDirection }): string => flexDirection || 'row'};
  ${({ flex }): string => (flex ? `flex: ${flex};` : '')}
  ${({ alignItems }): string => (alignItems ? `align-items: ${alignItems};` : '')}
  ${({ backgroundColor }): string => (backgroundColor ? `background-color: ${backgroundColor};` : '')}
  ${({ justifyContent }): string => (justifyContent ? `justify-content: ${justifyContent};` : '')}
  ${({ width }): string => (width ? `width: ${typeof width === 'number' ? `${width}px` : width};` : '')}
  ${({ height }): string => (height ? `height: ${typeof height === 'number' ? `${height}px` : height};` : '')}
  ${({ flexWrap }): string => (flexWrap ? `flex-wrap: ${flexWrap};` : '')}
  ${({ grow, flexDirection }): string => {
    if (grow) {
      if (flexDirection === FlexDirection.Row) {
        return 'width: 100%;';
      }

      return 'flex-grow: 1';
    }

    return '';
  }}
`;

export default FlexBox;
