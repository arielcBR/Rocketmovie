import { Link } from 'react-router-dom';
import { Container } from './styles';

import { Input } from '../../components/Input';
import { ButtonText } from '../ButtonText';
import { useAuth } from '../../hooks/auth';

export function Header(){
    const { signOut } = useAuth();
    return(
        <Container>
            <h1>RocketMovies</h1>
            <Input type="password" placeholder="Pesquisar pelo título"/>

            <div className='profile'>
                <div>
                    <h2>Ariel Campos</h2>
                    <ButtonText
                        onClick={signOut}
                        title="Sair"
                    />
                </div>
                <Link to="/profile">
                    <img src="https://github.com/arielcBR.png" alt="Foto do usuário" />
                </Link>
            </div>

        </Container>

    );
}