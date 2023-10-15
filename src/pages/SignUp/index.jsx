import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import { Container, Form, Background } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function SignUp(){
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie a sua conta</h2>
                <Input icon={FiUser} placeholder="Nome"/>
                <Input icon={FiMail} placeholder="E-mail" type="email"/>
                <Input icon={FiLock} placeholder="Senha" type="password"/>

                <Button title="Cadastrar"/>

                <span>
                    <FiArrowLeft/>
                    <ButtonText 
                        to="/" 
                        title="Voltar para o login"
                    />
                </span>
            </Form>

            <Background/>

        </Container>
    );
}