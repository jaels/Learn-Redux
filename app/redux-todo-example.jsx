var redux = require('redux');

console.log('starting redux');

var stateDefualt = {
    searchText: '',
    showCompleted: false,
    todos: []};

var reducer = (state = stateDefualt, action) => {
    switch (action.type) {
        case 'CHANGE_SEARCH_TEXT':
            return {
                ...state,
                searchText: action.searchText
            };
            default:
            return state
    }
}

var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

store.subscribe(()=>{
    var state = store.getState()
    console.log('name is', state.searchText)
})


store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'dog'
})

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'work'
})
