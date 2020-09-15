import reducer from '../reducers/index'
import * as types from '../actions/index'
import navBar from '../reducers/navbar'


describe('index reducers', () => {
    it('should return click state', () => {
        expect(reducer(undefined, false)).toEqual(
            {
        
                getMenuClick: navBar.state

            }
        )
    })

})


