import User from "@/models/userModel";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { connect } from "@/Database/Db"
import jwt from "jsonwebtoken";

connect();

export async function POST(req) {
    try {
        const body = await req.json();
        const { email, password } = body;
        const user = await User.findOne({ email });
        if (!user)
            return NextResponse.json({ message: "Invalid email or password" }, { status: 400 })

        const isPasswordMatch = await bcryptjs.compare(password, user.password);
        if (!isPasswordMatch)
            return NextResponse.json({ message: "Invalid email or password" }, { status: 400 });

        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }
        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: "1d" });
        const res = NextResponse.json(
            {
                message: `Welcome back ${user.username}`,
                success: true
            },
            { status: 200 }
        );

        res.cookies.set("token", token, { httpOnly: true, path: "/" });

        return res;
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}