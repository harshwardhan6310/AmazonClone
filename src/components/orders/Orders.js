import React, { useState,useEffect } from 'react'
import './Orders.css'
import { db } from '../../firebase';
import { useStateValue } from '../../StateProvider';
import Order from '../order/Order';

function Orders() {
    const [{ basket , user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user) {
            const ordersJson = JSON.parse(localStorage.getItem('orders')) || {};
            const userOrders = ordersJson[user.uid] || [];
            const ordersWithId = userOrders
                .sort((a, b) => b.created - a.created)
                .map(order => ({
                    id: order.created,
                    data: order
                }));
            setOrders(ordersWithId);
        } else {
            setOrders([]);
        }
    }, [user]);

  return (
    <div className='orders'>
        <h1>
            Your Orders
        </h1>
        <div className='orders-order'>
            {orders?.map(order => (
                <Order order={order} />
            ))}
        </div>
    </div>
  )
}

export default Orders