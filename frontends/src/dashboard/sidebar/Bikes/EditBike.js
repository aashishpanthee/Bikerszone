import React, { useState, useEffect } from "react";
import { Formik, ErrorMessage } from "formik";
import { ValidateService } from "../../Common/Validation";
import AddEditWrapper from "../../Common/AddEditWrapper";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from "../../Helper/Spinner";
import {
  editServiceById,
  getServiceById,
} from "../../../redux/features/Service/serviceActions";
import { clearFields } from "../../../redux/features/Service/ServiceSlice";
import { useParams } from "react-router-dom";
const base_url = "http://localhost:5000/";

const EditBike = () => {
  let { id } = useParams();
  const navigate = useNavigate();

  const onImageChange = (event, setFieldValue) => {
    setFieldValue("image", event.target.files[0]);
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
  };
  const dispatch = useDispatch();
  const { loading, error, success, serviceById } = useSelector(
    (state) => state.service
  );
  const { objectsWithEmptyChild } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getServiceById(id));
  }, [id]);

  useEffect(() => {
    if (success) {
      navigate(-1);
    }
  }, [success]);
  const [selectedImage, setSelectedImage] = useState();

  const handleBack = async () => {
    await dispatch(clearFields());
    navigate(-1);
  };

  return (
    <>
      {serviceById ? (
        <AddEditWrapper
          title='service'
          error={error}
          method='update'
          success={success}
          handleBack={handleBack}
          backlink='/admin/category'
        >
          <Formik
            initialValues={{
              name: serviceById.name,
              slug: serviceById.slug,
              categoryId: serviceById.categoryId,
            }}
            validationSchema={ValidateService}
            onSubmit={async (values) => {
              let formdata = new FormData();
              formdata.append("name", values.name);
              formdata.append("slug", values.slug);
              formdata.append("categoryId", values.categoryId);
              formdata.append("image", values.image);
              let data = {
                id: id,
                formdata: formdata,
              };
              await dispatch(editServiceById(data));
              await dispatch(clearFields());
            }}
          >
            {(props) => (
              <form onSubmit={props.handleSubmit}>
                <h6 className='mt-3 mb-6 text-sm font-bold uppercase text-blueGray-400'>
                  Service Information
                </h6>
                <div className='flex flex-wrap'>
                  <div className='w-full px-4 lg:w-6/12'>
                    <div className='relative w-full mb-3'>
                      <label
                        className='block mb-2 text-xs font-bold uppercase text-blueGray-600'
                        htmlFor='grid-password'
                      >
                        Service Name
                      </label>
                      <input
                        type='text'
                        className='w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
                        name='name'
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.name || ""}
                      />
                    </div>
                    <span className='text-red-500 error'>
                      <ErrorMessage name='name' />
                    </span>
                  </div>
                  <div className='w-full px-4 lg:w-6/12'>
                    <div className='relative w-full mb-3'>
                      <label
                        className='block mb-2 text-xs font-bold uppercase text-blueGray-600'
                        htmlFor='grid-password'
                      >
                        Slug
                      </label>
                      <input
                        type='text'
                        className='w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring'
                        name='slug'
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.slug || ""}
                      />
                    </div>
                    <span className='text-red-500 error'>
                      <ErrorMessage name='slug' />
                    </span>
                  </div>
                  <div className='w-full px-3 py-3 lg:w-6/12'>
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
                                <option value={item.id}>
                                  {item.CategoryName}
                                </option>
                              </>
                            );
                          })}
                      </select>
                    </div>
                    <span className='text-red-500 error'>
                      <ErrorMessage name='categoryId' />
                    </span>
                  </div>

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
                    {selectedImage ? (
                      <div className='relative mt-4 border w-28 h-28'>
                        <img
                          src={selectedImage}
                          height='80'
                          width='80'
                          alt='Thumb'
                        />
                      </div>
                    ) : (
                      <img
                        src={`${base_url}${serviceById.image}`}
                        height='80'
                        width='80'
                        alt='no-image-found'
                      />
                    )}
                  </div>
                </div>
                <hr className='mt-6 border-b-1 border-blueGray-300' />
                <div className='w-full px-3 py-3 lg:w-6/12'>
                  <div className='relative w-full mt-3 mb-3'>
                    {loading ? (
                      <Spinner />
                    ) : (
                      <button
                        type='submit'
                        className='px-4 py-2 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-lightBlue-500 active:bg-lightBlue-600 hover:shadow-md focus:outline-none'
                      >
                        Submit
                      </button>
                    )}
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </AddEditWrapper>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default EditBike;
