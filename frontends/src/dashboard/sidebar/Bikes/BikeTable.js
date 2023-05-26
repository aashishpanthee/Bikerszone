import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import Pagination from "../../Common/Pagination";
// import Searchbar from "../../Common/Searchbar";
import Spinner from "../../../Helper/Spinner";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
// import { serviceAll } from "../../../redux/features/Service/serviceActions";
// import { serviceCategory } from "../../../redux/features/Category/categoryActions";
// import { DeleteBike } from "./DeleteBike";
// import SearchbarService from "./SearchbarService";
// import PaginationService from "./PaginationService";

const BikeTable = ({ color }) => {
  const bikes = [
    {
      id: 1,
      bikename: "Pulsar 220",
      bikeno: "2345",
      category: "Economuter",
      perDay: 2000,
    },
  ];
  const [showModal, setShowModal] = useState(false);
  const [catId, setCatId] = useState();
  // const [filter, setFilter] = useState("");
  // const [page, setPage] = useState(0);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(serviceAll());
  // }, []);

  // useEffect(() => {
  //   dispatch(serviceCategory());
  // }, []);

  // const { loading, services, error } = useSelector((state) => state.service);
  // const base_url = "http://localhost:5000/";
  const handleDeleteClick = (id) => {
    setCatId(id);
    setShowModal(true);
  };
  return (
    <>
      {/* <SearchbarService filter={filter} setFilter={setFilter} page={page} /> */}
      <table className='items-center w-full bg-white border-collapse'>
        <thead>
          <tr>
            <th
              className={
                "px-6 border flex items-center justify-center border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold " +
                (color === "light"
                  ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                  : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
              }
            >
              SN
            </th>

            <th
              className={
                "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                (color === "light"
                  ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                  : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
              }
            >
              Bikename
            </th>
            <th
              className={
                "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                (color === "light"
                  ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                  : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
              }
            >
              Bike_no
            </th>
            <th
              className={
                "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                (color === "light"
                  ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                  : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
              }
            >
              Category
            </th>
            <th
              className={
                "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                (color === "light"
                  ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                  : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
              }
            >
              PerDay
            </th>
            <th
              className={
                "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                (color === "light"
                  ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                  : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
              }
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {/* {loading && <Spinner />}
          {error && toast.error(error)} */}
          {bikes && bikes.length !== 0 ? (
            bikes.map((bike, i) => {
              return (
                <tr key={bike.id}>
                  <td className='items-center p-4 px-6 text-left align-middle border-t-0 border-l-0 border-r-0 text-md whitespace-nowrap'>
                    {i + 1}
                  </td>
                  <td className='items-center p-4 px-6 text-left align-middle border-t-0 border-l-0 border-r-0 text-md whitespace-nowrap'>
                    <div className='flex'>
                      {/* {service.image && (
                        <img
                          src={`${base_url}${service.image}`}
                          className='w-12 h-12 bg-white border rounded-full'
                          alt={service.id}
                        ></img>
                      )}{" "} */}
                      {bike.bikename}
                    </div>
                  </td>
                  <td className='items-center p-4 px-6 text-left align-middle border-t-0 border-l-0 border-r-0 text-md whitespace-nowrap'>
                    {bike.bikeno}
                  </td>
                  <td className='items-center p-4 px-6 text-left align-middle border-t-0 border-l-0 border-r-0 text-md whitespace-nowrap'>
                    {bike.category}
                    {/*   {service.selectedcategory
                      ? service.selectedcategory.CategoryName
                      : "null"} */}
                  </td>
                  <td className='items-center p-4 px-6 text-center align-middle border-t-0 border-l-0 border-r-0 text-md whitespace-nowrap'>
                    {bike.perDay}
                  </td>
                  <td className='p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap'>
                    <div className='flex justify-center'>
                      <Link to={`/admin/service/edit/${bike.id}`}>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          class='icon icon-tabler icon-tabler-edit'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='#00b341'
                          fill='none'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                          <path d='M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3' />
                          <path d='M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3' />
                          <line x1='16' y1='5' x2='19' y2='8' />
                        </svg>
                      </Link>
                      <button
                        type='button'
                        onClick={() => {
                          handleDeleteClick(bike.id);
                        }}
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          class='icon icon-tabler icon-tabler-trash'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='#ff2825'
                          fill='none'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                          <line x1='4' y1='7' x2='20' y2='7' />
                          <line x1='10' y1='11' x2='10' y2='17' />
                          <line x1='14' y1='11' x2='14' y2='17' />
                          <path d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12' />
                          <path d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3' />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr className='text-center border'>
              <td colSpan={5} className='p-3 font-bold text-red-500'>
                No Data Found!!
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {/* <PaginationService
        page={page}
        setPage={setPage}
        filter={filter}
        services={services}
      /> */}
      {/* {showModal && <DeleteService id={catId} setShowModal={setShowModal} />} */}
    </>
  );
};

export default BikeTable;
