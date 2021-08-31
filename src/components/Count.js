import React from "react";
const Count = ({ increment, price, ing }) => {
    return (
        <div className='section-count'>
            <div className='container'>

                <div className='text-center pb-3'>
                    <span className='font-weight-bold align-self-center ml-5 mr-4'>
                        Total Price:
                    </span> <span className='border py-2 px-5 '>{price}$</span>
                    <button className='btn btn-primary mx-3'>Total</button>{" "}
                    {/* <button className='btn btn-primary  ' onClick={}>Print</button> */}
                </div>
                <div className='d-flex count-wrapper justify-content-center my-3'>
                    <span className='font-weight-bold align-self-center mx-5'>
                        Salad:
                    </span>
                    <span className='border py-2 px-5'>2</span>
                    <button className='btn btn-success mx-3' disabled={ing.filter((item) => item.type === "salad").length > 0 ? false : true} onClick={() => increment('salad', 'less')} >
                        Less
                    </button>
                    <button className='btn btn-success mx-2' onClick={() => increment('salad', 'more')}>More</button>
                </div>
                <div className='d-flex count-wrapper justify-content-center my-3'>
                    <span className='font-weight-bold align-self-center mx-5'>Meat:</span>
                    <span className='border py-2 px-5'>10</span>
                    <button className='btn btn-success mx-3' disabled={ing.filter((item) => item.type === "meat").length > 0 ? false : true} onClick={() => increment('meat', 'less')} >Less</button>
                    <button className='btn btn-success mx-2' onClick={() => increment('meat', 'more')} >More</button>
                </div>
                <div className='d-flex count-wrapper justify-content-center my-3'>
                    <span className='font-weight-bold align-self-center mx-5'>
                        Cheese:
                    </span>
                    <span className='border py-2 px-5'>4</span>
                    <button className='btn btn-success mx-3' disabled={ing.filter((item) => item.type === 'cheese').length > 0 ? false : true} onClick={() => increment('cheese', 'less')} >Less</button>
                    <button className='btn btn-success mx-2' onClick={() => increment('cheese', 'more')}>More</button>
                </div>
                <div className='d-flex count-wrapper justify-content-center my-3'>
                    <span className='font-weight-bold align-self-center mx-5'>
                        Bacon:
                    </span>
                    <span className='border py-2 px-5'>3</span>
                    <button className='btn btn-success mx-3' disabled={ing.filter((item) => item.type === "bacon").length > 0 ? false : true} onClick={() => increment('bacon', 'less')} >Less</button>
                    <button className='btn btn-success mx-2' onClick={() => increment('bacon', 'more')}>More</button>
                </div>
            </div>
        </div>
    );
};

export default Count;
