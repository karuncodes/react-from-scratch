import React from 'react'
import { Whoops404 } from '../../src/components/Whoops404'
import renderer from 'react-test-renderer'

it('404 page renders correctly',() => {
    const tree = renderer
                    .create(<Whoops404 />)
                    .toJSON();
    expect(tree).toMatchSnapshot();
})