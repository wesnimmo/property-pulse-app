const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null


// Fetch all properties
async function fetchProperties(){
    try {
        // Handle the case where the domain is not available yet
        if (!apiDomain){
            return []
        }

        // {cache: 'no-store} will ensure changes sent from client to DB will update changes ON THE CLIENT 
        const res = await fetch(`${apiDomain}/properties`, {cache: 'no-store'})

        if(!res.ok){
            throw new Error('Failed to fetch data')
        }
        return res.json()
    } catch (error) {
        console.log(error)
        return []
    }
}

// Fetch single property
async function fetchProperty(id){
    try {
        // Handle the case where the domain is not available yet
        if (!apiDomain){
            return null
        }

        const res = await fetch(`${apiDomain}/properties/${id}`)

        if(!res.ok){
            throw new Error('Failed to fetch data')
        }
        return res.json()
    } catch (error) {
        console.log(error)
        return null
    }
}

export { fetchProperties, fetchProperty }