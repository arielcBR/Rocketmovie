import { FiArrowLeft, FiX, FiPlus } from 'react-icons/fi';
import { Container } from './styles';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function CreateMovie(){
    return (
        <Container>
            <Header/>
            <main>
                <Link to="/">
                    <span className="backButton">
                        <FiArrowLeft/>
                        <ButtonText  to="/" title="Voltar"/>
                    </span>
                </Link>
                
                <h2>Novo Filme</h2>

                <div className="inputsWrapper">
                    <Input placeholder="Título"/>
                    <Input placeholder="Sua nota (de 0 a 5)"/>
                </div>

                <textarea placeholder="Observações"/>

                <h3>Marcadores</h3>

                <div className="tagsWrapper">   
                    <span className="tagWrapper">
                        <p>React</p>
                        <FiX/>
                    </span>

                    <span className="newTagWrapper">
                        <p>Novo marcador</p>
                        <FiPlus/>
                    </span>
                </div>

                <div className="buttonsWrapper">
                    <Button to="#" title="Excluir filme"/>
                    <Button to="#" title="Salvar alterações"/>
                </div>

            </main>
        </Container>

    );
}