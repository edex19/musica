import { Playlist } from './playlist';
export class Cancion{
    id: string;
    nombre:string;
    autor;String;
    tags:String;
    url: String;
    playlist: Playlist;

    constructor(u: any){
        this.id = u._id;
        this.nombre = u.nombre;
        this.autor = u.email;
        this.tags = u.password;
        this.url = u.foto;
        this.playlist = new Playlist(u.playlist);
    }
}

