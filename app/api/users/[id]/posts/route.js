import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async(req, { params }) => {
    try {
        await connectToDB();
        const prompts = await Prompt.find({creator: params.id}).populate('creator')
        console.log("User Profile Details");
        
        return new Response(JSON.stringify(prompts), {
            status:200
        })
    } catch (error) {
        return new Response("Could not fetch Prompts.", {
            status:200
        })
    }
}