import img from "../../../assets/categorys/headphones.png"
import "./Category.css"

const Category = () => {
  return (
   <>
   <div className="container gx-0 py-5 Full_main_category">
    <h2 className="py-3">Category</h2>
    <div className="row gx-0 main_category">
        <div className="col-md-2 col-6">
            <div className="home_category text-center">
                <img src={img} alt="" className="img-fluid" />
                <h5 className="Category_title">Category</h5>
            </div>
        </div>
        {/* *************************** */}
        <div className="col-md-2 col-6">
            <div className="home_category text-center">
                <img src={img} alt="" className="img-fluid" />
                <h5 className="Category_title">Category</h5>
            </div>
        </div>
          {/* *************************** */}
        <div className="col-md-2 col-6">
            <div className="home_category text-center">
                <img src={img} alt="" className="img-fluid" />
                <h5 className="Category_title">Category</h5>
            </div>
        </div>
          {/* *************************** */}
        <div className="col-md-2 col-6">
            <div className="home_category text-center">
                <img src={img} alt="" className="img-fluid" />
                <h5 className="Category_title">Category</h5>
            </div>
        </div>
          {/* *************************** */}
        <div className="col-md-2 col-6">
            <div className="home_category text-center">
                <img src={img} alt="" className="img-fluid" />
                <h5 className="Category_title">Category</h5>
            </div>
        </div>
          {/* *************************** */}
        <div className="col-md-2 col-6">
            <div className="home_category text-center">
                <img src={img} alt="" className="img-fluid" />
                <h5 className="Category_title">Category</h5>
            </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default Category