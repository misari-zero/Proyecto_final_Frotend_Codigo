import {useProductStore} from "../store/products.js";
import {Link} from "react-router-dom";
import NavBar from "./NavBarComponent.jsx";

const CardComponent = () => {

  const { products } = useProductStore()

  return (
    <>
      <NavBar/>
      <div className="max-w-[900px] mx-auto pl-4">
        <h1 className="text-3xl text-center font-bold">Tecnología</h1>
        <Link to={"/sidebar"}>
          <button type="button"
                  className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Home
          </button>
        </Link>
      </div>
      <div className="flex flex-col items-center mt-1">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-[900px]">
          {products.map(product => {
            return (
              <Link
                key={product.id}
                to={`/product/${product.id}`}>
                <article
                  key={product.id}
                  className="border rounded-lg border-gray-300 m-2 flex flex-col items-center pt-3 pb-3 bg-white hover:border-green-700"
                >
                  <img src={`${product.image}`} className="w-40 h-40 "/>
                  <h3 className="font-bold text-left p-3">{product.name}</h3>
                  <p className="text-green-700">{`$${product.price} o S./${(product.price * 3.74).toFixed(2)}`}</p>
                  <p>stock: {`${product.quantity}`}</p>
                </article>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default CardComponent;