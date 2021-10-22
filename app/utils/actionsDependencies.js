const pendingActions = [];

const getAndRemoveFirstActionThatCanBeExecuted = (state) => {
    for (let i = 0; i < pendingActions.length; i++) {
        let pendingAction = pendingActions[i];

        if (pendingAction.condition(state)) {
            pendingActions.splice(i, 1);
            return pendingAction;
        }
    }

    return null;
}

const getAndRemoveActionsThatCanBeExecuted = (state) => {
    let actionsThatCanBeExecuted = [];
    let readyAction = getAndRemoveFirstActionThatCanBeExecuted(state);
    while (readyAction) {
        actionsThatCanBeExecuted.push(readyAction);
        readyAction = getAndRemoveFirstActionThatCanBeExecuted(state);
    }

    return actionsThatCanBeExecuted;
}

export const checkPendingActions = (state) => {
    // check if there are pending actions that can be executed, if so, executes them
    let actionsToBeExecuted = getAndRemoveActionsThatCanBeExecuted(state);

    actionsToBeExecuted.forEach(readyAction => {
        readyAction.resolve();
    });
}

export const waitUntil = (condition, state) => {
    // returns a promise that resolves once the condition function returns true for the current state
    return new Promise((resolve) => {
        if (condition(state)) {
            resolve();
        } else {
            pendingActions.push({
                condition,
                resolve
            });
        }
    });
}