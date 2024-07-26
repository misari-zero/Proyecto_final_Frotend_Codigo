import {Link, useParams} from "react-router-dom";
import {useProductStore} from "../../store/products.js";
import NavBar from "../NavBarComponent.jsx";

const ProductDetail1 = () => {
const params = useParams();
const { products } = useProductStore()

  return (
    <>
      <div className="w-[800px] m-auto">
      <NavBar/>
      <Link to={"/tecnologia"} >
        <button type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Back
        </button>
      </Link>
      <h1 className="text-3xl font-bold pb-3 w-[800px] m-auto pt-2">
        {products[params.id - 1].name}
      </h1>

      <div className=" rounded-lg flex gap-4 w-[800px] m-auto">
        <img src={`${products[params.id - 1].image}`}
             className="w-[400px] h-[400px] border border-gray-300 rounded-lg p-3"/>
        <div className="border border-gray-300 w-[400px] h-[400px] rounded-lg p-3">
          <p>código Interno: <span className="font-semibold">{`000${params.id}`}</span></p>
          <p>Stock: <span className="font-semibold">{`${products[params.id - 1].quantity}`}</span></p>

          <div className="pt-3">
            <a href="https://www.apple.com/la/macbook-pro/" target='_blank'>
              <button type="button"
                      className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300
                  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500
                  dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
              >
                Informacion del Fabricante
              </button>
            </a>
          </div>
          <span className="text-green-700 text-2xl font-semibold">
            Precio: {`$${products[params.id - 1].price} ó S/.${(products[params.id - 1].price * 3.74).toFixed(2)} `}
          </span>
          <ul className="pl-3">
            <li className="font-semibold">-Precio incluye el I.G.V</li>
            <li>-Precio sujeto a cambios sin previo aviso</li>
            <li>-Precio no incluye flete de envio</li>
          </ul>
        </div>
      </div>
      <div className="w-[800px] m-auto pt-5 border border-gray-300 rounded-lg mt-6 p-3">
        <h3 className="font-semibold text-green-800  border-b mb-2 pb-1">Descripcion</h3>
        <p>{`${products[params.id - 1].descripcion}`}</p>
      </div>
      </div>
    </>
  )
}

export default ProductDetail1;