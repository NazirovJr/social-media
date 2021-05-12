import appReducer, {initialized, initializeSuccess} from "../appReducer";

describe('The app reducer tests:', () => {
    const INITIALIZE_SUCCESS = 'INITIALIZE_SUCCESS'
    describe('The defining function test:', () => {
        test('The reducer defining function test', () => {
            expect(appReducer).toBeDefined()
        })
        test('The action creator defining function test', () => {
            expect(initializeSuccess).toBeDefined()
        })
        test('The thunk defining function test', () => {
            expect(initialized).toBeDefined()
        })
    })
    describe('The correction working of function with valid data:',() => {
        test('The reducer working  test', () => {
            expect(appReducer({initialize: false}, initializeSuccess()).initialize).toBeTruthy()
        })
        test('The action creator working test', () => {
            expect(initializeSuccess().type).toBe(INITIALIZE_SUCCESS)
        })
    })
})
