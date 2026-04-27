const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
  title: { type: String, required: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  mileage: { type: Number },
  transmission: { type: String, enum: ['Manual', 'Automatic'] },
  fuelType: { type: String, enum: ['Bensin', 'Diesel', 'Hybrid', 'Listrik'] },
  color: { type: String },
  condition: { type: String, enum: ['Sangat Baik', 'Baik', 'Cukup'] },
  location: { type: String, required: true },
  description: { type: String },
  images: [{ type: String }],
  seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['Tersedia', 'Terjual'], default: 'Tersedia' },
  views: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Car', CarSchema);
