import connectDB from "@/config/database"
import Property from "@/models/Property"



// GET /api/properties
export const GET = async (request, { params }) => {
    try {
        await connectDB()

        //'userId' is used cause THAT IS NAME OF THE FOLDER
        const userId = params.userId

        if(!userId){
            return new Response('User ID is required', { status: 400 })
        }

        const properties = await Property.find({ owner: userId })

        return new Response(JSON.stringify(properties), { status: 200 })
    } catch (error) {
        console.log(error)
        return new Response('Something went wrong', { status: 500 })
    }
}
