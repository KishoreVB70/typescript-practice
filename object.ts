interface User{
    id: number,
    name: string
}

const user:User = {
    id: 50,
    name: "something"
}

type UserArray = Array<User>

const userArray: UserArray = [{id: 40, name:"50"}]