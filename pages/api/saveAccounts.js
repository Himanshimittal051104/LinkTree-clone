import Accounts from "@/models/Accounts";
import connectDb from "@/db/connectDb";

export default async function handler(req, res) {
    await connectDb();
    res.setHeader('Cache-Control', 'no-store');
    if (req.method === 'POST') {
        const {
            email,password} = req.body;
        try {
            const newAccount = new Accounts({email,password});
            await newAccount.save();
            res.status(201).json({ success: true, message: 'Account saved successfully!' });
        } catch (error) {
            console.error('Error saving account:', error);
            res.status(400).json({ success: false, message: error });
        }
    }else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}