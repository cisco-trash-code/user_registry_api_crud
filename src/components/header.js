import React from 'react';

const Header = () => {
    return ( 
        <div>
            <div className='row row-1'>
                <h1 className='mx-auto m-5'>User Registery</h1>
            </div>
            <form>
                <div className="form-row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Name" />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Username" />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="email" />
                    </div>
                </div>
                <div className="form-row mt-3">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="City" />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Phone" />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Company" />
                    </div>
                </div>
            </form>
        </div>
     );
}
 
export default Header;