


const { createSlice } = require("@reduxjs/toolkit");

const states = {
 todo:[
    {id:1, description:"faire les course", isDone:false},
    {id:2, description:"faire mes exercices", isDone:true}],
    filter:"all"
}


export const todoSlice = createSlice({
    name: "todo",
    initialState:states,
    reducers:{
        addTache:(state,action)=>{
          const newTache={
                id:Date.now(),
                description:action.payload, 
                isDone:false
            }
            state.todo.push(newTache);
        },
        modifTache:(state,action)=>{
            const {id,desc} = action.payload;
            const tache = state.todo.find(elm=>elm.id === id);
            tache.description = desc;
        },
        togelle:(state,action)=>{
            const Tache = state.todo.find(t=>t.id===action.payload);
            Tache.isDone = !Tache.isDone;
        },
        Filter: (state, action) => {
            state.filter = action.payload;
          },
        deleteTache:(state,action)=>{
            state.todo = state.todo.filter(elem=>elem.id !==action.payload);
            return state;
        }
    }
});

export const {addTache,modifTache,togelle,Filter,deleteTache} = todoSlice.actions;

