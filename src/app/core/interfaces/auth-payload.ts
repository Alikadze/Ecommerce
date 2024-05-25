export interface AuthPayload {
  email: string;
  password: string;
}


export interface AuthResponce {
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
  displayName?: string,
  registered?: boolean
}