import reducer from '../reducers/index'
import navBar from '../reducers/navbar'

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