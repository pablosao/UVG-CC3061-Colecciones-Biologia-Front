import reducer from '../reducers/navbar'
import actions from '../actions/navbar'
import * as types from '../actions/navbar'


describe('navbar reducers', () => {
    it('should return click state', () => {
        expect(reducer(undefined, false)).toEqual(
            {
        
                hamburgerMenuClicked: false

            }
        )
    })

})
describe('navbar actions', () =>{
    it('should return click state', () => {
        const showHideMenu = types.HAMBURGER_CLICKED
        const expectedAction = {
            type: types.HAMBURGER_CLICKED,
            showHideMenu

        }
    })
})

