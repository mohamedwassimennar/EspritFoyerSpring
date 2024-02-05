export class User{
    constructor(
        public idUser?:number,
        public nomUser?:string,
        public prenomUser?:string,
        public email?:string,
        public motdepasse?:string,
        public role?:string
    ){}
}