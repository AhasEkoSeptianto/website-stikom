//  create redux
const redux = require("redux");

const createStore = redux.createStore;

// inisial store
const initialState = {
	value: 0,
	age: 17,
};

// redducer
const rootReducer = (state = initialState, action, newvalue) => {
	console.log(action);
	switch (action.type) {
		case "add_age": {
			return {
				...state,
				age: (state.age += 1),
				value: action.newvalue,
			};
		}
		case "add_value": {
			return {
				...state,
				value: (state.value += 1),
			};
		}
	}
	return state;
};

// store
const store = createStore(rootReducer);

// sucribe
store.subscribe(() => {
	console.log("store change ", store.getState());
});

console.log(store.getState());
// dispatch
store.dispatch({ type: "add_age", newvalue: 11 });

store.dispatch({ type: "add_value" });

console.log(store.getState());
