const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./Config/DB');
const authRoutes = require('./Routes/Authroutes');
const userRoutes = require('./Routes/Userroutes');
const restaurantRoutes = require('./Routes/Restaurantroutes');
const menuRoutes = require('./Routes/Menuroutes');
const orderRoutes = require('./Routes/Orderroutes');
const couponRoutes = require('./Routes/Couponroutes');
// const paymentRoutes = require('./Routes/Paymentroutes');
// const errorHandler = require('./Middleware/Errorhandler');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/coupons', couponRoutes);
// app.use('/api/payments', paymentRoutes);

// Error handler
// app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
