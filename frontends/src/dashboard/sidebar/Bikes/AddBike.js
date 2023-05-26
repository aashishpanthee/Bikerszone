import React, { useState, useEffect } from "react";
import { Formik, ErrorMessage } from "formik";
import { ValidateBikeAdd } from "../../../common/Validation";
import AddEditWrapper from "../../common/AddEditWrapper";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import Spinner from "../../../Helper/Spinner";
/* import { serviceCategory } from "../../../redux/features/Category/categoryActions";
import { addService } from "../../../redux/features/Service/serviceActions";
import { clearFields } from "../../../redux/features/Service/ServiceSlice"; */

const AddBike = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   dispatch(serviceCategory());
  // }, []);

  const [selectedImage, setSelectedImage] = useState();

  const onImageChange = (event, setFieldValue) => {
    setFieldValue("image", event.target.files[0]);
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
  };
  /* 
  const { loading, error, success } = useSelector((state) => state.service);
  const { objectsWithEmptyChild } = useSelector((state) => state.category); */

  // useEffect(() => {
  //   if (success) {
  //     navigate(-1);
  //   }
  // }, [success]);

  const handleBack = async () => {
    navigate(-1);
  };

  return (
    <AddEditWrapper
      title='Bikes'
      // error={error}
      method='create'
      // success={success}
      handleBack={handleBack}
      backlink='/admin/category'
    >
      <Formik
        initialValues={{
          bikeName: "",
          bikeNumber: "",
          price: "",
        }}
        validationSchema={ValidateBikeAdd}
        onSubmit={async (values) => {
          let formdata = new FormData();
          formdata.append("bikeName", values.bikeName);
          formdata.append("bikenumber", values.bikeNumber);
          formdata.append("image", values.image);
          formdata.append("perdayprice", values.perdayprice);
          console.log(values);
          /*   await dispatch(addService(formdata));
          await dispatch(clearFields()); */
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit} className='bg-transparent'>
            <h6 className='mt-3 mb-6 text-sm font-bold text-black uppercase'>
              Bike Information
            </h6>
            <div className='flex flex-wrap'>
              <div className='w-full px-4 lg:w-6/12'>
                <div className='relative w-full mb-3'>
                  <label
                    className='block mb-2 text-xs font-bold uppercase text-blueGray-600'
                    htmlFor='grid-password'
                  >
                    Bike Name
                  </label>
                  <input
                    type='text'
                    className='w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
                    name='BikeName'
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.bikeName || ""}
                  />
                </div>
                <span className='text-red-500 error'>
                  <ErrorMessage name='bikeName' />
                </span>
              </div>
              <div className='w-full px-4 lg:w-6/12'>
                <div className='relative w-full mb-3'>
                  <label
                    className='block mb-2 text-xs font-bold uppercase text-blueGray-600'
                    htmlFor='grid-password'
                  >
                    Bike Number
                  </label>
                  <input
                    type='text'
                    className='w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
                    name='bikenumber'
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.bikenumber || ""}
                  />
                </div>
                <span className='text-red-500 error'>
                  <ErrorMessage name='bikenumber' />
                </span>
              </div>
              <div className='w-full px-4 mt-4 lg:w-6/12'>
                <div className='relative w-full mb-3'>
                  <label
                    className='block mb-2 text-xs font-bold uppercase text-blueGray-600'
                    htmlFor='grid-password'
                  >
                    Perday Price
                  </label>
                  <input
                    type='number'
                    className='w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
                    name='perdayprice'
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.perdayprice || ""}
                  />
                </div>
                <span className='text-red-500 error'>
                  <ErrorMessage name='perdayprice' />
                </span>
              </div>
              {/*  <div className='w-full px-3 py-3 lg:w-6/12'>
                <div className='relative w-full mb-3'>
                  <label
                    className='block mb-2 text-xs font-bold uppercase text-blueGray-600'
                    htmlFor='grid-password'
                  >
                    Category
                  </label>
                  <select
                    className='w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none'
                    name='categoryId'
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.categoryId}
                    autoComplete='off'
                  >
                    <option>Select</option>
                    {objectsWithEmptyChild.length !== 0 &&
                      objectsWithEmptyChild.map((item, i) => {
                        return (
                          <>
                            <option value={item.id}>{item.CategoryName}</option>
                          </>
                        );
                      })}
                  </select>
                </div>
                <span className='text-red-500 error'>
                  <ErrorMessage name='categoryId' />
                </span>
              </div> */}

              <div className='w-full px-3 py-3 lg:w-3/12'>
                <div className='relative w-full mb-3 '>
                  <label
                    className='block mb-2 text-xs font-bold uppercase text-blueGray-600'
                    htmlFor='grid-password'
                  >
                    Image
                  </label>
                  <input
                    type='file'
                    accept='image/*'
                    className='w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
                    onChange={(event) =>
                      onImageChange(event, props.setFieldValue)
                    }
                    onBlur={props.handleBlur}
                    autoComplete='off'
                  />
                </div>
                <span className='text-red-500 error'>
                  <ErrorMessage name='fullName' />
                </span>
              </div>
              <div className='px-4 lg:w-3/12'>
                {selectedImage && (
                  <div className='relative mt-4 border w-28 h-28'>
                    <img
                      src={selectedImage}
                      className='object-cover w-full '
                      alt='Thumb'
                    />
                  </div>
                )}
              </div>
            </div>
            <hr className='mt-6 border-b-1 border-blueGray-300' />
            <div className='w-full px-3 py-3 lg:w-6/12'>
              <div className='relative w-full mt-3 mb-3'>
                <button
                  type='submit'
                  className='px-4 py-2 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-orange active:bg-lightBlue-600 hover:shadow-md focus:outline-none'
                >
                  Submit
                </button>
                {/*  {loading ? (
                  <Spinner />
                ) : (
                  <button
                    type='submit'
                    className='px-4 py-2 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-lightBlue-500 active:bg-lightBlue-600 hover:shadow-md focus:outline-none'
                  >
                    Submit
                  </button>
                )} */}
              </div>
            </div>
          </form>
        )}
      </Formik>
    </AddEditWrapper>
  );
};

export default AddBike;
