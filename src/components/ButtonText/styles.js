import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
    color: ${({ theme }) => theme.COLORS.BACKGROUND_TAGS};
    font-size: 14px;
    font-weight: 700;
`;