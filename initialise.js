import mongoose from 'mongoose';
import User from './models/User.js';
import SoldItem from './models/SoldItem.js';

export const initialiseDatabase = async () => {
  try {
    // Connect to the MongoDB database
    await mongoose.connect(process.env.CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });

    // Check if any admin user exists
    const adminUserExists = await User.exists({ isAdmin: true });
    if (adminUserExists) {
      console.log('Admin user already exists. Skipping initialisation.');
      return;
    }

    // Clear the database of all SoldItem records
    await SoldItem.deleteMany({});

    // Clear the database of all User records
    await User.deleteMany({});

    // Create a super admin user
    await User.create({
      email: 'superadmin@example.com',
      password: 'superadminpassword',
      isAdmin: true,
      permissions: 'admin'
    });

    // Create a user with read permission
    await User.create({
      email: 'readuser@example.com',
      password: 'readuserpassword',
      permissions: 'read'
    });

    // Create a user with edit permission
    await User.create({
      email: 'edituser@example.com',
      password: 'edituserpassword',
      permissions: 'edit'
    });

    console.log('Initialisation complete');
  } catch (error) {
    console.error('Initialisation error:', error);
  } finally {
    // Close the MongoDB connection
    // await mongoose.disconnect();
  }
};
