import { Container } from './styles';

import { Input } from '../../components/Input';
import { ButtonText } from '../ButtonText';

export function Header(){

    return(
        <Container>
            <h1>RocketMovies</h1>

            <Input type="password" placeholder="Pesquisar pelo título"/>

            <div className='profile'>
                <div>
                    <h2>Ariel Campos</h2>
                    <ButtonText title="Sair" />
                </div>
                <img src="https://github.com/arielcBR.png" alt="Foto do usuário" />
            </div>

        </Container>

    );
}