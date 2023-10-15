import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Container } from './styles';
import { Link } from 'react-router-dom';
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export function Profile(){
    return(
        <Container>
            <header>
                <span>
                    <FiArrowLeft/>
                    <Link className='link' to="/register">
                        <ButtonText title="Voltar"/>
                    </Link>
                </span>
            </header>

            <main>
                <div className='profileUser'>
                    <button className='addPicture'>
                        <FiCamera/>
                    </button>
                </div>

                <Input icon={FiUser} placeholder="Nome"/>
                <Input icon={FiMail} placeholder="E-mail" type="email"/>
                <Input icon={FiLock} placeholder="Senha atual" type="password"/>
                <Input icon={FiLock} placeholder="Nova senha" type="password"/>

                <Button to="/new" title="Salvar"/>
            </main>

        </Container>
    );
}