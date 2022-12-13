import {
    setName,
    setId,
    setEmail,
    setIsAdmin
} from "redux/reducers/userProfileReducer";

/**
 * Class for managing the User data in the State Layer of the app.
 */
class UserService {
    _store = null;

    constructor(reduxStore) {
        this._store = reduxStore;
    }

    // get (){
    //     // return store.dispatch(.user;
    // }
    // set (user) {
    //     this.user.setId(user.id);
    //     this.user.setEmail(user.email);
    //     this.user.setName(user.name);
    //     this.user.setIsAdmin(user.isAdmin);
    // }
    async getName() {
        if (!this._store) return;

        // Reading current state value
        return this._store.getState().reducer.name;
    }
    async setName(newName) {
        if (!this._store || !newName) return;

        // Setting new state value
        this._store.dispatch(setName(newName));
    }
    async getId() {
        if (!this._store) return;

        // debugger;
        return this._store.getState().reducer.id;
    }
    async setId(id) {
        if (!this._store) return;

        this._store.dispatch(setId(id));
    }
    async getEmail() {
        if (!this._store) return;

        return this._store.getState().reducer.mail;
    }
    async setEmail(email) {
        if (!this._store) return;

        this._store.dispatch(setEmail(email));
    }
    async getIsAdmin() {
        if (!this._store) return;

        return this._store.getState().reducer.isAdmin;
    }
    async setIsAdmin(isAdmin) {
        if (!this._store) return;

        this._store.dispatch(setIsAdmin(isAdmin));
    }
}

export { UserService };