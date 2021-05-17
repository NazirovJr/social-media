const ADD_MESSAGE= 'message/ADD-MESSAGE'

const InitializeState = {
    chat:[
        {
            id:'1',
            person_name:'Nazirov',
            message:'Hello how are you ?'
        },
        {
            id:'2',
            person_name:'Salmon' ,
            message:'Hello?'

        },
        {
            id:'3',
            person_name:'Sabur' ,
            message:'how are you ?'
        },
        {
            id:'4',
            person_name:'Salomaddin' ,
            message:'who are you ?'
        },
        {
            id:'5',
            person_name:'Manuchehr',
            message:'where are you ?'
        },
        {
            id:'6',
            person_name:'Ikromjon' ,
            message:'Чо карди брат ?'
        }
    ],
    currentMessage : {
        text:''
    }
}

const messagePostReducer = (state=InitializeState,action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                chat:[...state.chat,{id:'1',person_name:'Nazirov',message:action.dialogForm}],
                currentMessage: {
                    text: ""
                }
            }
        default:
            return state;
    }
}

export const addMessage = (dialogForm) => ({type:ADD_MESSAGE,dialogForm})
export default messagePostReducer