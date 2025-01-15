import React from 'react';

const Dashboard = () => {
  const orders = [
    { id: 1, name: 'Ahmad', service: 'Cleaning Rumah', date: '2024-11-23', time: '09:00' },
    { id: 2, name: 'Siti', service: 'Cuci Sofa', date: '2024-11-24', time: '14:00' },
  ];

  return (
    <div className="p-6 bg-white shadow-md rounded-md max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Dashboard Admin</h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Nama</th>
            <th>Layanan</th>
            <th>Tanggal</th>
            <th>Jam</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order.id}>
              <td>{index + 1}</td>
              <td>{order.name}</td>
              <td>{order.service}</td>
              <td>{order.date}</td>
              <td>{order.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
