const { configureStore } = require("@reduxjs/toolkit");
const { todoSlice } = require("./redouseur");

export const store = configureStore({
    reducer:{
        todo: todoSlice.reducer,
    },
})