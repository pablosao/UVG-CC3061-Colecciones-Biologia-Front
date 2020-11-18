import reducer from '../reducers/auth'
import * as types from '../actions/auth'

describe('auth reducers', () => {
    it('should return auth state', () => {
        expect(reducer(undefined, false)).toEqual(
            {
                form: {},
                navbar: {
                hamburgerMenuClicked: false},
                search: { 
                suggestions: []}
               
                }



            
        )
    })

})