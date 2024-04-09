import connectDB from "@/config/database"
import Property from "@/models/Property"

// GET /api/properties/:id
export const GET = async (request, { params }) => {
    try {
        await connectDB()

        const property = await Property.findById(params.id)

        if(!property) return new Response('Property Not Found', { status: 404 })

        return new Response(JSON.stringify(property), { status: 200 })
    } catch (error) {
        console.log(error)
        return new Response('Something went wrong', { status: 500 })
    }
}

export const POST = async (request) => {
    try {
        const formData = await request.formData()
        console.log(formData.get('name'))
        return new Response(JSON.stringify({message: 'success'}), { status: 200 })

    } catch (error) {
        
        return new Response('Failed to Add Property', { status: 500 })
    }
}