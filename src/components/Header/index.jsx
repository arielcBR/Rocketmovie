import { Link } from 'react-router-dom';
import { Container } from './styles';

import { Input } from '../../components/Input';
import { ButtonText } from '../ButtonText';
import { useAuth } from '../../hooks/auth';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { api } from '../../services/api';

export function Header(){
    const { signOut, user } = useAuth();
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    return(
        <Container>
            <h1>RocketMovies</h1>
            <Input type="password" placeholder="Pesquisar pelo título"/>

            <div className='profile'>
                <div>
                    <h2>{user.name}</h2>
                    <ButtonText
                        onClick={signOut}
                        title="Sair"
                    />
                </div>
                <Link to="/profile">
                    <img src={avatarUrl} alt="Foto do usuário" />
                </Link>
            </div>

        </Container>

    );
}