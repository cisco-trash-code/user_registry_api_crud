import React from 'react';

const Header = props => {
    const { name , username , email , city , phone , company } = props.userData;
    const { onNameChange , onUsernameChange , onEmailChange , onCityChange , onPhoneChange , onCompanyChange , onSubmit , onUpdate , onDelete } = props;
    return ( 
        <div>
            <div className='row row-1'>
                <h1 className='mx-auto m-5'>User Registery</h1>
            </div>
            <form>
                <div className="form-row">
                    <div className="col">
                        <input value={name} onChange={(e) => onNameChange(e.target.value)} type="text" className="form-control" placeholder="Name" />
                    </div>
                    <div className="col">
                        <input value={username} onChange={(e) => onUsernameChange(e.target.value)} type="text" className="form-control" placeholder="Username" />
                    </div>
                    <div className="col">
                        <input value={email} onChange={(e) => onEmailChange(e.target.value)} type="text" className="form-control" placeholder="email" />
                    </div>
                </div>
                <div className="form-row mt-3">
                    <div className="col">
                        <input value={city} onChange={(e) => onCityChange(e.target.value)} type="text" className="form-control" placeholder="City" />
                    </div>
                    <div className="col">
                        <input value={phone} onChange={(e) => onPhoneChange(e.target.value)} type="text" className="form-control" placeholder="Phone" />
                    </div>
                    <div className="col">
                        <input value={company} onChange={(e) => onCompanyChange(e.target.value)} type="text" className="form-control" placeholder="Company" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="col">
                    <button onClick={onSubmit} type='button' className='btn btn-primary mt-3 col-12'>Add</button>
                    </div>
                    <div className="col">
                    <button onClick={() => onUpdate()} type='button' className='btn btn-info mt-3 col-12'>Update</button>
                    </div>
                    <div className="col">
                    <button onClick={() => onDelete()} type='button' className='btn btn-danger mt-3 col-12 '>Delete</button>
                    </div>
                </div>

            </form>
        </div>
     );
}
 
export default Header;