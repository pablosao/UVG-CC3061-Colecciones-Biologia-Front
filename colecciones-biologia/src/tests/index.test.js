

import reducer from '../reducers/index'

describe('index reducers', () => {
    it('should return click state', () => {
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