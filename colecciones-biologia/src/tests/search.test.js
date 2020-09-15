import reducer from '../reducers/search'
import actions from '../actions/search'
import * as types from '../actions/search'



describe('search reducers', () => {
    it('should return suggestions', () => {
        expect(reducer(undefined, false)).toEqual(
            {
        
               suggestions:false,
               suggestions: []

            }
        )
    })

})


describe('search actions', () =>{
    it('should return suggestions founded', () => {
        const foundSuggestions = types.SUGGESTIONS_FOUNDED
        const expectedAction = {
            type: types.SUGGESTIONS_FOUNDED,
            foundSuggestions

        }
    })
})


