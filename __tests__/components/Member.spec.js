import React from 'react'
import { Member } from '../../src/components/Member'
import renderer from 'react-test-renderer'

const member = {
    admin: true,
    name: "manofzeal",
    email: "kk@manofzeal.in",
    image: "kk.jpg"
}

it('renders member',() => {
    const tree = renderer
                    .create(<Member
                        admin={member.admin}
                        name={member.name}
                        email={member.email}
                        image={member.image}/>)
                    .toJSON();
    expect(tree).toMatchSnapshot();
})