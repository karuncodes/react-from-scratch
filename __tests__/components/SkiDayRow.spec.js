import React from 'react'
import { shallow } from 'enzyme'
import { SkiDayRow } from '../../src/components/SkiDayRow'

const day = {
    resort: 'Clinton Resorts',
    date: '2018-11-11',
    powder: true,
    backcountry: false
}

it('Renders the SkiDayRow ',()=>{
    const row = shallow(<SkiDayRow {...day} />);
    expect(row.find('td').length).toBe(4);
})