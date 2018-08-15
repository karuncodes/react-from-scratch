import { Component } from 'react'
import { Member } from './Member'

export class MemberList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="member-list">
            <h1>Society Names </h1>
            {this.props.members.map((member, i) => {
                return <Member key={i} member={member} makeAdmin={member.makeAdmin}/>
            })}
        </div>
    }
}