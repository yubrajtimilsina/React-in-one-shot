import Card from "../../components/Card"
import Navbar from "../../components/Navbar"


function Home(){
    return (
        <>
        <Navbar />
        <div className="flex space-x-10 mt-10 ml-10">
        <Card/>
        <Card/>
        <Card/>
        </div>

        </>
    )
}
export default Home