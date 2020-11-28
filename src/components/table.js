import React from 'react';

const Table = props => {
    const { userList } = props;
    return ( 
        <div className='row row-2'>
            <table className='table mt-3'>
                <thead className='thead-secondary'>
                    <tr className='row'>
                        <th className='col-2'>Name</th>
                        <th className='col-1'>Username</th>
                        <th className='col-2'>email</th>
                        <th className='col-1'>City</th>
                        <th className='col-2'>Phone</th>
                        <th className='col-2'>Company</th>
                        <th className='col-1'>Update</th>
                        <th className='col-1'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map(user =>
                        <tr key={user.id} className='row'>
                            <td className='col-2'>{user.name}</td>
                            <td className='col-1'>{user.username}</td>
                            <td className='col-2'>{user.email}</td>
                            <td className='col-1'>{user.address.city}</td>
                            <td className='col-2'>{user.phone}</td>
                            <td className='col-2'>{user.company.name}</td>
                            <td className='col-1'><button className='btn btn-info btn-sm'>Update</button></td>
                            <td className='col-1'><button className='btn btn-danger btn-sm'>Delete</button></td>
                        </tr>
                        )}
                </tbody>
            </table>
        </div>
     );
}
 
export default Table;