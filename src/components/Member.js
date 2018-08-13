export const Member = ({member}) => (<div>
    <span>admin: {member.admin}</span>
    <span>name: {member.name}</span>
    <img src={member.thumbnail}></img>
    <span>email: {member.email}</span>
    </div>
)