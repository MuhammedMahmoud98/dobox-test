export interface LoginPayload {
    password: string,
    username: string,
    "is-duo": boolean,
    "organization-domain": string
}