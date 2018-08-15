import  { FaShieldAlt }  from 'react-icons/fa'

// function handleClick(props){
//     console.log("yea did it",props);
// }
export const Member = ({member, makeAdmin}) => (<div>
    <h1>{member.name} {(member.admin)? <FaShieldAlt /> : "" } </h1>
    <img style={{"width": '80px',
                 "height": '80px'}}
         src={member.thumbnail} />
    <div> email: <a href={`mailto:${member.email}`}>{member.email}</a></div>
    <button onClick={makeAdmin}>Make Admin</button>
    </div>
)