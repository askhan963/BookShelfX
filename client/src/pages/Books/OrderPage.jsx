import React from 'react';
import { useGetOrderByEmailQuery } from '../../redux/orders/ordersApi';
import { useAuth } from '../../context/AuthContext';

const OrderPage = () => {
    const { currentUser } = useAuth();
    const { data: orders = [], isLoading, isError } = useGetOrderByEmailQuery(currentUser.email);

    if (isLoading) return <div className="flex justify-center items-center h-screen text-lg">Loading...</div>;
    if (isError) return <div className="flex justify-center items-center h-screen text-red-500 text-lg">Error getting orders data</div>;

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold mb-6 text-center text-primary">Your Orders</h2>
            {
                orders.length === 0 ? (
                    <div className="text-center text-gray-500 text-xl mt-8">No orders found!</div>
                ) : (
                    <div className="space-y-6">
                        {orders.map((order, index) => (
                            <div key={order._id} className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
                                <div className="flex items-center justify-between mb-4">
                                    <p className="text-lg font-semibold text-gray-700">Order #{index + 1}</p>
                                    <p className="text-xs font-semibold bg-secondary text-white py-1 px-2 rounded">ID: {order._id}</p>
                                </div>
                                <div className="border-t border-gray-200 pt-4">
                                    <div className="grid grid-cols-2 gap-4 text-gray-600">
                                        <p><span className="font-medium text-gray-700">Name:</span> {order.name}</p>
                                        <p><span className="font-medium text-gray-700">Email:</span> {order.email}</p>
                                        <p><span className="font-medium text-gray-700">Phone:</span> {order.phone}</p>
                                        <p><span className="font-medium text-gray-700">Total Price:</span> ${order.totalPrice.toFixed(2)}</p>
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Address</h3>
                                        <p className="text-gray-600">{order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode}</p>
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Products</h3>
                                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                                            {order.productIds.map((productId) => (
                                                <li key={productId}>{productId}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )
            }
        </div>
    );
}

export default OrderPage;
