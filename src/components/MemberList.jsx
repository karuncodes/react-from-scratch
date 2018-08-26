import React from 'react'
import { Member } from './Member'
import fetch from 'isomorphic-fetch'

export class MemberList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            members: [],
            loading: false,
            administrators: []
        }
        this.makeAdmin = this.makeAdmin.bind(this);
        this.removeAdmin = this.removeAdmin.bind(this);
        this.controller = new AbortController();
        this.signal = this.controller.signal;
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
        fetch("https://api.randomuser.me/?nat=US&results=12", {
            method: 'get',
            signal: this.signal
        })
        .then(response => response.json())
        .then(json => json.results )
        .then ( members => {
            // if component unmounted before fetch is done then,
            //it creates a warning of cannot call setState
            this.setState(
                {
                    members,
                    loading: false
                }
            )
        })
        .catch(err => {
            console.log("err",err);
        })
    }
    componentWillUnmount() {
        if(!this.signal.aborted){
            this.controller.abort();
        }
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