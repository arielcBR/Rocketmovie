import { Container } from './styles';
import { RatingStars } from '../RatingStars';

import { Tag } from '../Tag';

export function Movie({title, body }){
    return (
        <Container>
            <h3>{title}</h3>
            <RatingStars value={5} color={({theme}) => theme.COLORS.ROSE}/>
            <p>{body}</p>
            <Tag title="Ficção Científica"/>
            <Tag title="Drama"/>
            <Tag title="Família"/>
        </Container>
    );
}