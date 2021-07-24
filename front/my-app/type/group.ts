import User from "./user";

export default interface Group {
    id: number
    name: string
    users: User[]
} 