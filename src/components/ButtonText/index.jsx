import { Container } from "./styles";

export function ButtonText({title, href, to, ...rest}){
    const defaultHref = '#';
    return(
        <Container
            type="button"
            to={to}
            href={href ? href : defaultHref}
            {...rest}
        >
            {title}
        </Container>
    );

}