import { useState } from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Container } from './styles';
import { Link } from 'react-router-dom';
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { useAuth } from '../../hooks/auth';

export function Profile() {
    const { user, updateProfile } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    async function handleUpdate() {
        const user = {
            name,
            email,
            old_password: oldPassword,
            new_password: newPassword
        };

        await updateProfile({user});
    }

    return(
        <Container>
            <header>
                <span>
                    <Link className='link' to="/">
                        <FiArrowLeft/>
                        <ButtonText title="Voltar" to="/"/>
                    </Link>
                </span>
            </header>

            <main>
                <div className='profileUser'>
                    <button className='addPicture'>
                        <FiCamera/>
                    </button>
                </div>

                <Input 
                    icon={FiUser} 
                    placeholder="Nome" 
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
                <Input 
                    icon={FiMail} 
                    placeholder="E-mail" 
                    type="email" 
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                <Input 
                    icon={FiLock} 
                    placeholder="Senha atual" 
                    type="password"
                    onChange={event=>setOldPassword(event.target.value)}
                />
                <Input 
                    icon={FiLock} 
                    placeholder="Nova senha" 
                    type="password"
                    onChange={event=>setNewPassword(event.target.value)}
                />

                <Button
                    title="Salvar"
                    onClick={handleUpdate}
                />
            </main>

        </Container>
    );
}