import React from 'react';

const Header = () => {
    return ( 
        <div>
            <div className='row row-1'>
                <h1 className='mx-auto m-5'>User Registery</h1>
            </div>
            <form>
                <div class="form-row">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Name" />
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Username" />
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="email" />
                    </div>
                </div>
                <div class="form-row mt-3">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="City" />
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Phone" />
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Company" />
                    </div>
                </div>
            </form>
        </div>
     );
}
 
export default Header;