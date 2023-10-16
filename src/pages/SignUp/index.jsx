import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import { Container, Form, Background } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { api } from '../../services/api';

export function SignUp(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    async function handleSignUp(){
        if(!name.length || !email.length || !password.length)
            return alert("Preencha todos os campos obrigatórios!");

        await api
            .post("/users", {name, email, password})
            .then(() => {
                alert("Usuário cadastrado com sucesso!");
                navigate("/");
            })
            .catch(error =>{
                if(error.response){
                    alert(error.response.data.message);
                }
                else{
                    alert("Não foi possível cadastrar!");
                }
            });
    }

    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie a sua conta</h2>
                <Input 
                    icon={FiUser} 
                    placeholder="Nome"
                    onChange={event=>setName(event.target.value)}
                    />
                <Input 
                    icon={FiMail} 
                    placeholder="E-mail" type="email"
                    onChange={event=>setEmail(event.target.value)}
                    />
                <Input 
                    icon={FiLock} 
                    placeholder="Senha" type="password"
                    onChange={event=>setPassword(event.target.value)}
                />

                <Button 
                    title="Cadastrar"
                    onClick={handleSignUp}
                />

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