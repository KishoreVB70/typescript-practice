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

console.log(user.id);

const puckOpp = (name: string, id: number | string): {hi: UserArray, bye: User} => {
    return {hi: [{id:50, name: "me"}], bye: {id:12, name:"bebe"}}

}

function puck(name: string, id: number | string): string {
    return "hi"

}

export{}