import { Container } from "./styles";

export function Button({icon: Icon, title, ...rest}){
    return (
        <Container {...rest}>
            <span>
                {Icon && <Icon size={20} />}
                {title}
            </span>
        </Container>

    );
}
