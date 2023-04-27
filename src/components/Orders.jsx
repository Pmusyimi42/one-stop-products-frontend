import React, { useState, useEffect } from 'react';
import './Orders.css';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [statusFilter, setStatusFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  useEffect(() => {
    let url = '/orders';
    if (statusFilter || dateFilter) {
      url += '?';
      if (statusFilter) {
        url += `status=${statusFilter}&`;
      }
      if (dateFilter) {
        url += `date=${dateFilter}&`;
      }
    }
    fetch(url)
      .then(response => response.json())
      .then(data => setOrders(data));
  }, [statusFilter, dateFilter]);

  const renderOrdersTable = () => {
    if (!Array.isArray(orders)) {
      return null;
    }
    return orders.filter((order) => {
      if (statusFilter && dateFilter) {
        return order.payment.status === statusFilter && order.created_at.slice(0, 10) === dateFilter;
      } else if (statusFilter) {
        return order.payment.status === statusFilter;
      } else if (dateFilter) {
        return order.created_at.slice(0, 10) === dateFilter;
      } else {
        return true;
      }
    }).map((order) => (
      <tr key={order.id}>
        <td>{order.created_at.slice(0, 10)}</td>
        <td>{order.id}</td>
        <td>{order.payment.status}</td>
        <td>${order.payment.amount}</td>
        {/* <td>{order.itemsSold}</td> */}
      </tr>
    ));
  };
  

  const handleStatusFilterChange = (e) => {
    setStatusFilter(e.target.value);
  };

  const handleDateFilterChange = (e) => {
    setDateFilter(e.target.value);
  };

  const netSales = orders.length ? orders.reduce((acc, order) => acc + Number(order.payment.amount), 0).toFixed(2) : 0;

  return (
    <div className="orders-container">
      <h1 className="orders-title">Orders</h1>
      <div className="orders-header">
        <div className="orders-header-item">
          <h1>Orders</h1>
          <h1>{orders.length}</h1>
        </div>
        <div className="orders-header-item">
          <h1>Net Sales</h1>
          <h1>
            ${netSales}
          </h1>
        </div>
      </div>
      <div className="orders-search">
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search By Status"
            aria-label="Search"
            value={statusFilter}
            onChange={handleStatusFilterChange}
          />
          <input
            className="form-control me-2"
            type="date"
            placeholder="Transaction Date"
            aria-label="Transaction Date"
            value={dateFilter}
            onChange={handleDateFilterChange}
          />
        </form>
      </div>
      <div className="orders-table">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Order</th>
              <th>Status</th>
              <th>Net Sales</th>
              {/* <th>Items Sold</th> */}
            </tr>
          </thead>
          <tbody>{renderOrdersTable()}</tbody>
        </table>
        </div>
    </div>
  );
}
