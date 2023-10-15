import { Container } from './styles';


export function Input({icon: Icon, type = "text" ,...rest}){
    return(
        <Container>
            {Icon && <Icon size={20}/>}
            <input type = { type } {...rest}/>
        </Container>

    );

}