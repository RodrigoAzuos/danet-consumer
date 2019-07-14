import {Perfil} from './perfil';
import {Comentario} from './comentario';

export class Post {
    id: string;
    foto: File;
    resumo: string;
    autor: Perfil;
    criado_em: Date;
    like: number;
    dislike: number;
    comentarios: Comentario;
}
