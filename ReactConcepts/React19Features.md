

1. Actions-> Performing actions asynchronously is now easy with usetranstion hook 
2. UseOptimistic Hook -> to manage the state of data in an asynchronous flow

const [optimizedState, addOptmistic] = useOptimistic(
    state,
    (currentState, optimistic){
        returns the updated State
    }
)

https://medium.com/@weijunext/react-19-is-here-lets-learn-it-56eb22fe3a50

