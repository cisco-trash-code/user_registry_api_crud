import React from 'react';

const Table = props => {
    const { userList , onSelect} = props;
    return ( 
        <div className='row row-2'>
            <table className='table mt-3'>
                <thead className='thead-secondary'>
                    <tr>
                        <th >Name</th>
                        <th >Username</th>
                        <th >email</th>
                        <th >City</th>
                        <th >Phone</th>
                        <th >Company</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map(user =>
                        <tr onClick={() => onSelect(user)} key={user.id}>
                            <td >{user.name}</td>
                            <td >{user.username}</td>
                            <td >{user.email}</td>
                            <td >{user.address.city}</td>
                            <td >{user.phone}</td>
                            <td >{user.company.name}</td>
                        </tr>
                        )}
                </tbody>
            </table>
        </div>
     );
}
 
export default Table;