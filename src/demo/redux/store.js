import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

export default function configureStore() {
    return createStore(rootReducer, applyMiddleware(thunk));
}
const store = configureStore();
// export default createStore(rootReducer);
function fetchSecretSauce() {
    return fetch("http://jsonplaceholder.typicode.com/photos");
}

// These are the normal action creators you have seen so far.
// The actions they return can be dispatched without any middleware.
// However, they only express “facts” and not the “async flow”.

function makeASandwich(forPerson, secretSauce) {
    return {
        type: "MAKE_SANDWICH",
        forPerson,
        secretSauce
    };
}

function apologize(fromPerson, toPerson, error) {
    return {
        type: "APOLOGIZE",
        fromPerson,
        toPerson,
        error
    };
}

function withdrawMoney(amount) {
    return {
        type: "WITHDRAW",
        amount
    };
}

// Even without middleware, you can dispatch an action:
store.dispatch(withdrawMoney(100));

// But what do you do when you need to start an asynchronous action,
// such as an API call, or a router transition?

// Meet thunks.
// A thunk in this context is a function that can be dispatched to perform async
// activity and can dispatch actions and read state.
// This is an action creator that returns a thunk:
function makeASandwichWithSecretSauce(forPerson) {
    console.log("makeASandwichWithSecretSauce called ---> ", forPerson);
    // We can invert control here by returning a function - the "thunk".
    // When this function is passed to `dispatch`, the thunk middleware will intercept it,
    // and call it with `dispatch` and `getState` as arguments.
    // This gives the thunk function the ability to run some logic, and still interact with the store.
    return function(dispatch) {
        return fetchSecretSauce().then(
            (sauce) => dispatch(makeASandwich(forPerson, sauce)),
            (error) => dispatch(apologize("The Sandwich Shop", forPerson, error))
        );
    };
}

// Thunk middleware lets me dispatch thunk async actions
// as if they were actions!

store.dispatch(makeASandwichWithSecretSauce("Me"));

// It even takes care to return the thunk’s return value
// from the dispatch, so I can chain Promises as long as I return them.

store.dispatch(makeASandwichWithSecretSauce("My partner")).then(() => {
    console.log("Done!");
});

// In fact I can write action creators that dispatch
// actions and async actions from other action creators,
// and I can build my control flow with Promises.

function makeSandwichesForEverybody() {
    return function(dispatch, getState) {
        if (!getState().sandwiches.isShopOpen) {
            // You don’t have to return Promises, but it’s a handy convention
            // so the caller can always call .then() on async dispatch result.

            return Promise.resolve();
        }

        // We can dispatch both plain object actions and other thunks,
        // which lets us compose the asynchronous actions in a single flow.

        return dispatch(makeASandwichWithSecretSauce("My Grandma"))
            .then(() =>
                Promise.all([
                    dispatch(makeASandwichWithSecretSauce("Me")),
                    dispatch(makeASandwichWithSecretSauce("My wife"))
                ])
            )
            .then(() => dispatch(makeASandwichWithSecretSauce("Our kids")))
            .then(() =>
                dispatch(
                    getState().myMoney > 42
                        ? withdrawMoney(42)
                        : apologize("Me", "The Sandwich Shop")
                )
            );
    };
}

// This is very useful for server side rendering, because I can wait
// until data is available, then synchronously render the app.

// store
//     .dispatch(makeSandwichesForEverybody())
//     .then(() => response.send(ReactDOMServer.renderToString(<MyApp store={store} />)));
