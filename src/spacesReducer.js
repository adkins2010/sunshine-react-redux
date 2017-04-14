import Space from './Space'
import App from './AppObject'

const spaces = (state = [], action) => {
    if (!action || !action.type) {
        return state
    }

    let newState = state
    let space, app
    switch (action.type) {
        case 'SPACE_CREATED':
           space = new Space(action.space.id, action.space.name, action.space.memory, action.space.disk)
           newState.push(space)
           break

        case 'SPACE_UPDATED':
            space = newState.find((checkSpace) => checkSpace.id === Number(action.space.id))
            space.name = action.space.name;
            space.memory_quotamb = action.space.memory_quotamb;
            space.disk_quotamb = action.space.disk_quotamb;
            break

        case 'SPACE_DELETED':
            newState = newState.filter((space) => space.id !== action.space.id)
            break

        // case 'APP_CREATED':
        //     space = newState.find((space) => space.id === action.id)
        //     app = new App(action.space.id, action.space.spaceId, action.space.appName, action.space.appMemory, action.space.appDisk)
        //     space.apps.push(app)
    }

    return newState
}

export default spaces