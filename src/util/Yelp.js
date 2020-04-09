const clientID = 'gnJdmjz577H6ILTV8dAm4w'

const apiKey = 'ex4VnxwQBhzURPLSLFHfGLin5P1_O5dbjDv2cleBMdwY-4Rxc0b1sLvO8Hsc9o1Ywjyq8_JDdBbCWiirZms7QhSGIlmeA1iN1pzV3Mcac_GaUaX746SNypD512knW3Yx'

let Yelp = {
    search:(term,location,sortBy)=>{
        const endPoint = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`
        return fetch(endPoint,{
            headers:{
                Authorization: `Bearer ${apiKey}`
            }
        } ).then(response=>{
            if(response.ok){
                return response.json();}
            throw new Error("Connection Failed!")
        },networkError=>{console.log(networkError.message)}).then(jsonResponse=>{
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map(business=>{
                    return  {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    };
                })
            }
        })
    }

};



export default Yelp;