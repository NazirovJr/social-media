import authReducer, {authUser, loginUser, logoutUser, setUser} from "../authReducer";

describe('The authorized reducer tests:', () => {
    const SET_USER_DATA = 'SET-USER-DATA'
    const InitializeState = {
        userId: null,
        email: null,
        login: null,
        isAuth: false
    }
    describe('The defining function test:', () => {
        test('The reducer defining function test', () => {
            expect(authReducer).toBeDefined()
        })
        test('The action creator defining function test', () => {
            expect(setUser).toBeDefined()
        })
        test('The thunk defining function test', () => {
            expect(loginUser).toBeDefined()
            expect(authUser).toBeDefined()
            expect(logoutUser).toBeDefined()
        })
    })
    describe('The correction working of function with valid data:', () => {
        let loginMike = {email:'mike@gmail.com', password:'mike1222', rememberMe:true}
        let userMike = {userId:new Date(), email:'mike@gmail.com', login:'mike', isAuth:true}
        test('The auth reducer  working  test', () => {
            expect(authReducer(InitializeState, setUser(userMike.userId, userMike.email, userMike.login, userMike.isAuth))).toEqual(userMike)
        })
        test('The action creator working test', () => {
            expect(setUser(userMike.userId, userMike.email, userMike.login, userMike.isAuth).type).toBe(SET_USER_DATA)
        })
        test('The thunk login user creator working test', () => {
            expect(loginUser(loginMike.email, loginMike.password, loginMike.rememberMe)).toBeInstanceOf(Function)
        })
        test('The thunk auth user creator working test', () => {
            expect(authUser()).toBeInstanceOf(Function)
        })
        test('The thunk logout user creator working test', () => {
            expect(authUser()).toBeInstanceOf(Function)
        })
    })
})
