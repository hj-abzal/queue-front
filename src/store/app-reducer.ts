export type RestaurantType = {
    id:number,
    name: string,
    img:string
}

type StateType = RestaurantType[]

export const restaurantsInitialState : StateType= [
    {id:1,name:'Burger King', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Burger_King_logo_%281999%29.svg/2024px-Burger_King_logo_%281999%29.svg.png'},
    {id:2,name:'McDonald', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Burger_King_logo_%281999%29.svg/2024px-Burger_King_logo_%281999%29.svg.png'},
    {id:3,name:'Маши Со', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Burger_King_logo_%281999%29.svg/2024px-Burger_King_logo_%281999%29.svg.png'}
]

type getRestaurants = {
    type: 'GET-RESTAURANTS'
}

export const appReducer = (state: StateType = restaurantsInitialState, action: any)=>{
    switch (action.type) {

        default:{
            return state
        }
    }
}