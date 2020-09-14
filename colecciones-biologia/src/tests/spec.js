import reducer from '../reducers/navbar'
import * as types from '../actions/navbar'

describe('navbar reducers', () => {
    it('should retunr initial state', () => {
        expect(reducer(undefined,{})).toEqual([
            {
        
                hamburgerMenuClicked: false

            }
        ])
    })

})

