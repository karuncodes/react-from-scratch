export const Member = ({member}) => (<div>
    <span>admin: {member.admin}</span>
    <span>name: {member.name}</span>
    <img style={{"width": '80px',
                 "height": '80px'}}
         src={member.thumbnail}>{member.name +'s'} Photo</img>
    <span>email: {member.email}</span>
    </div>
)