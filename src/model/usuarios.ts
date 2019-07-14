export class Usuario{
    _id: number;
    username: string;
    password: string;

    constructor(username, password) {       
        this.username = username;
        this.password = password;
    }
}