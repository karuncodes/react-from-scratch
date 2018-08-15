import { Component } from 'react'
import { Member } from './Member'
import fetch from 'isomorphic-fetch'

export class MemberList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            members: [],
            loading: false,
            administrators: []
        }
        this.makeAdmin = this.makeAdmin.bind(this);
        this.removeAdmin = this.removeAdmin.bind(this);
    }

    makeAdmin(email) {
        const administrators = [
            ...this.state.administrators,
            email
        ]
        this.setState({administrators});
    }

    removeAdmin(email) {
        const administrators = this.state.administrators.filter(em => em !== email)
        this.setState({administrators});
    }
    componentDidMount() {
        this.setState({ loading: true });
        fetch("https://api.randomuser.me/?nat=US&results=12")
        .then(response => response.json())
        .then(json => json.results )
        .then ( members => {
            this.setState(
                {
                    members,
                    loading: false
                }
            )
        })
    }
    render() {

        const { members, loading } = this.state;
        return <div className="member-list">
            {(loading)?
                <span> loading </span> :
                <span> {members.length} members </span> }
            <h1>Society Names </h1>
            {(members.length) ? members.map((member, i) => {
                return <Member key={i}
                               admin={this.state.administrators.some(em => em === member.email)}
                               name={member.name.first + ' ' + member.name.last}
                               email={member.email}
                               image={member.picture.thumbnail}
                               makeAdmin={this.makeAdmin}
                               removeAdmin={this.removeAdmin}/>
            }):<span>Currently 0 members</span>}
        </div>
    }
}