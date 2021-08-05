import React from "react";
const Count = ({ price, adding }) => {
    return (
        <div className='section-count'>
            <div className='container'>
                <div className='text-center pb-5'>
                    {" "}
                    <b>
                        Total Price <span className='border  px-4 py-2 ms-3'>{price}  $</span>
                    </b>{" "}
                    <button className='btn btn-primary ms-4'>Total</button>{" "}
                </div>
                <div className='d-flex count-wrapper justify-content-center my-3'>
                    <span className='font-weight-bold align-self-center mx-5'>
                        Salad:
                    </span>
                    <span className='border py-2 px-5'>2</span>
                    <button className='btn btn-success mx-3' onClick={() => adding('salad', 'less')} >
                        Less
                    </button>
                    <button className='btn btn-success mx-2' onClick={() => adding('salad', 'more')}>More</button>
                </div>
                <div className='d-flex count-wrapper justify-content-center my-3'>
                    <span className='font-weight-bold align-self-center mx-5'>Meat:</span>
                    <span className='border py-2 px-5'>5</span>
                    <button className='btn btn-success mx-3' onClick={() => adding('meat', 'less')}>Less</button>
                    <button className='btn btn-success mx-2' onClick={() => adding('meat', 'more')}>More</button>
                </div>
                <div className='d-flex count-wrapper justify-content-center my-3'>
                    <span className='font-weight-bold align-self-center mx-5'>
                        Cheese:
                    </span>
                    <span className='border py-2 px-5'>4</span>
                    <button className='btn btn-success mx-3' onClick={() => adding('cheese', 'less')}>Less</button>
                    <button className='btn btn-success mx-2' onClick={() => adding('cheese', 'more')}>More</button>
                </div>
                <div className='d-flex count-wrapper justify-content-center my-3'>
                    <span className='font-weight-bold align-self-center mx-5'>
                        Bacon:
                    </span>
                    <span className='border py-2 px-5'>3</span>
                    <button className='btn btn-success mx-3' onClick={() => adding('bacon', 'less')}>Less</button>
                    <button className='btn btn-success mx-2' onClick={() => adding('bacon', 'more')}>More</button>
                </div>
            </div>
        </div>
    );
};

export default Count;
