export interface User {
  username: string;
  password: string;
}

export interface UserResponse extends User {
    token: string
    username: string
    first_name: string
    last_name: string,
    user_id: number,
    email: string,
    genero: string,
    foto: string,
    biografia: string,
    estado_civil:string,
}