import { Container } from "./styles";

export function ButtonText({title, href, to}){
    const defaultHref = '#';
    return(
        <Container type="button" to={to} href={href ? href : defaultHref}>
            {title}
        </Container>
    );

}