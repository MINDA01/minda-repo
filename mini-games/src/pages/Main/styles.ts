import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;
    ${({theme:{ common, fontSizes} })=> css`
        ${common.flexCenterColumn};
        font-size: ${fontSizes.subtitle};
    `}
`;

export const Container = styled.ul`
`;

export const List = styled.li`
    margin: 25px 0;
`;


