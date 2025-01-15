'use client'
import React, { useEffect, useState } from 'react';

const BookingForm = ({ layananService }) => {
  const [formData, setFormData] = useState({
    name: '', // Set initial name to layananService
    email: '',
    phone: '',
    service: layananService, // Set initial service to layananService
    date: '',
    time: '',
  });
  console.log(layananService)

  // Update service and name fields when layananService changes
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      service: layananService, // If you want service to also reflect the new layananService
    }));
  }, [layananService]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Pemesanan berhasil dilakukan!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      time: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-2 bg-white rounded-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Form Pemesanan</h2>

      {/* Nama */}
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Nama</span>
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="input input-bordered"
          required
        />
      </div>

      {/* Email */}
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="input input-bordered"
          required
        />
      </div>

      {/* Nomor Telepon */}
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Nomor Telepon</span>
        </label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="input input-bordered"
          required
        />
      </div>

      {/* Layanan (Dropdown) */}
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Layanan</span>
        </label>
        <select
          name="service"
          value={formData.service} // Value will be bound to formData.service
          onChange={handleChange}
          className="select select-bordered"
          required
        >
          <option value="Cleaning Rumah">Cleaning Rumah</option>
          <option value="Cleaning Kantor">Cleaning Kantor</option>
          <option value="Cuci Sofa">Cuci Sofa</option>
        </select>
      </div>

      {/* Tanggal */}
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Tanggal</span>
        </label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="input input-bordered"
          required
        />
      </div>

      {/* Jam */}
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Jam</span>
        </label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="input input-bordered"
          required
        />
      </div>

      {/* Tombol Submit */}
      <button type="submit" className="btn btn-primary w-full">
        Pesan Sekarang
      </button>
    </form>
  );
};

export default BookingForm;
