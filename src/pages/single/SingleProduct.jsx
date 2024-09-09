import { Link, useNavigate, useParams } from "react-router-dom"
import Navbar from "../../components/Navbar"
import axios from "axios"
import { useEffect, useState } from "react"

function SingleProduct() {
    const {id} = useParams()
    const [product,setProduct] = useState({})
    const navigate = useNavigate()
    const fetchProduct = async ()=>{
        const response = await axios.get("https://66dd6c30f7bcc0bbdcde1022.mockapi.io/products" + id)
        if(response.status === 200){
         setProduct(response.data)
        }
     }

     const deleteMe = async ()=>{
        const response =  await axios.delete( "https://66dd6c30f7bcc0bbdcde1022.mockapi.io/products"+ id)
        if(response.status === 200){
          navigate("/")
        }else{
          alert("Delete vayena hai error aayo !!")
        }
      }

     useEffect(()=>{
        fetchProduct()
    },[])
    
    return(
        <>
        <Navbar />
        <div class="bg-gray-100 dark:bg-gray-800 py-8">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row -mx-4">
            <div class="md:flex-1 px-4">
                <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img class="w-full h-full object-cover" src={product.productImage} alt="Product Image" />
                </div>
                <div class="flex -mx-2 mb-4">
                    <div class="w-1/2 px-2">
                       <Link to={`/edit/${product.id}`}>
                       <button class="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Edit</button>
                       </Link>
                    </div>
                    <div class="w-1/2 px-2">
                        <button onClick={deleteMe} class="w-full bg-gray-200 dark:bg-red-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-red-600">Delete</button>
                    </div>
                </div>
            </div>
            <div class="md:flex-1 px-4">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">{product.productName}</h2>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {product.productDescription}
                </p>
                <div class="flex mb-4">
                    <div class="mr-4">
                        <span class="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                        <span class="text-gray-600 dark:text-gray-300">${product.productPrice}</span>
                    </div>
                    <div>
                        <span class="font-bold text-gray-700 dark:text-gray-300">Category:</span>
                        <span class="text-gray-600 dark:text-gray-300">{product.productCategory}</span>
                    </div>
                    <div>
                        <span class="font-bold text-gray-700 dark:text-gray-300">Brand:</span>
                        <span class="text-gray-600 dark:text-gray-300">{product.productBrand}</span>
                    </div>
                </div>
            
             
            </div>
        </div>
    </div>
</div>

        </>
    )
}
export default SingleProduct