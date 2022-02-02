import styled from 'styled-components';

interface SpaceProps {
  readonly space: number;
  readonly horizontal?: boolean;
  readonly vertical?: boolean;
}

const Space = styled.div<SpaceProps>`
  ${({ vertical, space }): string => (vertical ? `height: ${space}px;` : '')}
  ${({ horizontal, vertical, space }): string => (!vertical || horizontal ? `width: ${space}px;` : '')}
`;

export default Space;
