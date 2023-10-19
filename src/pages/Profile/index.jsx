import { useState } from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Container, Form, Avatar } from "./styles";
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { api } from '../../services/api';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { useAuth } from '../../hooks/auth';

export function Profile() {
    const { user, updateProfile } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    const [avatar, setAvatar] = useState(avatarUrl);
    const [avatarFile, setAvatarFile] = useState(null);


    async function handleUpdate() {
        const user = {
            name,
            email,
            old_password: oldPassword,
            new_password: newPassword
        };

        await updateProfile({user, avatarFile});
    }

    function handleChangeAvatar(event) {
        const file = event.target.files[0];
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
        
    }

    return (
        <Container>
            <header>
                <span>
                    <div className='link'>
                        <FiArrowLeft/>
                        <ButtonText title="Voltar" to="/"/>
                    </div>
                </span>
            </header>
    
            <Form>
                <Avatar>
                    <img
                        src={avatar}
                        alt="Foto do usuário"
                    />
                    <label htmlFor="avatar">
                        <FiCamera />
    
                        <input
                            id="avatar"
                            type="file"
                            onChange={handleChangeAvatar}
                        />
                    </label>
                </Avatar>
    
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
            </Form>
        </Container>
    );
}