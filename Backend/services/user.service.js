import userModel from '../models/user.model.js';
import bcrypt from 'bcryptjs'; // Import bcryptjs

export const createUser = async ({
    email, password
}) => {
    if (!email || !password) {
        throw new Error('Email and password are required');
    }

    const hashedPassword = await bcrypt.hash(password, 10); // Use bcryptjs for hashing

    const user = await userModel.create({
        email,
        password: hashedPassword
    });

    return user;
}

export const getAllUsers = async ({ userId }) => {
    const users = await userModel.find({
        _id: { $ne: userId }
    });
    return users;
}
