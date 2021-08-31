import React, { useState } from 'react'
const Print = ({ ing, price, fixedPrice }) => {
    const salad = ing.filter((item) => item.type === 'salad');
    const meat = ing.filter((item) => item.type === 'meat');
    const cheese = ing.filter((item) => item.type === 'cheese');
    const bacon = ing.filter((item) => item.type === 'bacon');
    const details = [
        { item: 'salad', count: salad.length, price: fixedPrice.salad * salad.length, fixedPrice: 2 },
        { item: 'meat', count: meat.length, price: fixedPrice.meat * meat.length, fixedPrice: 10 },
        { item: 'cheese', count: cheese.length, price: fixedPrice.cheese * cheese.length, fixedPrice: 4 },
        { item: 'bacon', count: bacon.length, price: fixedPrice.bacon * bacon.length, fixedPrice: 3 },

    ]
    return (
        <div className="print-page">
            <div className="container" >
                <table className="table-hover table" style={{ width: "100%" }}>
                    <thead>
                        <tr className="text-center">
                            <th>
                                Items Count
                            </th>
                            <th>
                                Items
                            </th>
                            <th>
                                Pr Items Count
                            </th>
                            <th>
                                Total Item Price
                            </th>

                        </tr>




                    </thead>
                    <tbody>
                        {
                            details.filter((item) => item.count !== 0).map((item, i) => (
                                <tr className="text-center">
                                    <td>{item.count}</td>
                                    <td>{item.item}</td>
                                    <td>{item.fixedPrice}</td>
                                    <td>{item.price}</td>

                                </tr>
                            ))}
                        <tr className="text-center" style={{ fontSize: "25px", fontWeight: "700" }}>
                            <td></td>
                            <td></td>

                            <td className="text-danger">total</td>

                            <td className="text-danger">{price}$ </td>

                        </tr>
                    </tbody>
                </table>
            </div>


        </div>
    )
}

export default Print
