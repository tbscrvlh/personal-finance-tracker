import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
`;

export const Title = styled.div`
    text-align: center;
    color: #999;
    margin-bottom: 5px;
`;

export const Info = styled.div<{ color?: string }>`
    text-align: center;
    color: ${props => props.color ?? '#000'};
`;