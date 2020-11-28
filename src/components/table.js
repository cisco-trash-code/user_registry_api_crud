import React from 'react';

const Table = () => {
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
                <tr className='row'>
                        <td className='col-2'>Leanne Graham</td>
                        <td className='col-1'>Bret</td>
                        <td className='col-2'>Sincere@april.biz</td>
                        <td className='col-1'>Gwenborough</td>
                        <td className='col-2'>1-770-736-8031 x56442</td>
                        <td className='col-2'>Romaguera-Crona</td>
                        <td className='col-1'><button className='btn btn-info btn-sm'>Update</button></td>
                        <td className='col-1'><button className='btn btn-danger btn-sm'>Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
     );
}
 
export default Table;