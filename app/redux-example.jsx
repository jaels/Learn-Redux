var redux = require('redux');
var axios = require('axios');

console.log('starting redux');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();


//subscribe
store.subscribe(()=>{
    var state = store.getState()
    if(state.map.isFetching) {
        document.getElementById('app').innerHTML = 'loading...';
    } else if (state.map.url) {
        document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View your location</a>'
    }
})

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Yael'));

store.dispatch(actions.addHobby('running'))

store.dispatch(actions.removeHobby(1))

store.dispatch(actions.changeName('Emmily'))

store.dispatch(actions.addMovie('drakula', 'horror'))

store.dispatch(actions.addMovie('monsters', 'kids'))

store.dispatch(actions.removeMovie(1))
