import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import emailjs from "@emailjs/browser";
export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e8rugp9",
        "template_vogjv4o",
        e.target,
        "HMDTuBXNunQ1mWh_a"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div id='contact' className='mt-10'>
      <div className="text-center pt-8 pb-8 font-['Open_Sans']">
        <h2
          className='text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900'
          data-aos='zoom-in'
          data-aos-duration='1000'
        >
          {" "}
          Let's give a try
        </h2>
      </div>
      <div className='px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8'>
          <div>
            <h2
              className='text-2xl font-extrabold sm:text-3xl'
              data-aos='fade-right'
              data-aos-duration='1000'
            >
              Get in touch
            </h2>

            <div className='mt-9'>
              <div className='flex'>
                <div className='flex-shrink-0'>
                  <PhoneIcon
                    className='w-8 h-8 text-orange'
                    aria-hidden='true'
                  />
                </div>
                <div className='ml-3 text-base'>
                  <p className='text-2xl font-extrabold'>Phone no</p>
                  <p>
                    <a href='tel:+9779824498186'>+977 9864858784</a>
                  </p>
                </div>
              </div>
              <div className='flex mt-6'>
                <div className='flex-shrink-0'>
                  <EnvelopeIcon
                    className='w-8 h-8 text-orange'
                    aria-hidden='true'
                  />
                </div>
                <div className='ml-3 text-base'>
                  <p className='text-2xl font-extrabold'>Email</p>
                  <p className='mt-2'>
                    <a href='mailto:sherpa.codes@gmail.com'>
                      bikebook@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className='flex mt-6'>
                <div className='flex-shrink-0'>
                  <MapPinIcon
                    className='w-8 h-8 text-orange'
                    aria-hidden='true'
                  />
                </div>
                <div className='ml-3 text-base'>
                  <p className='text-2xl font-extrabold'>Location</p>
                  <div className='text-base'>
                    <p className='mt-1'>Lumbini Province, Nepal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-12 sm:mt-16 md:mt-0'>
            <div className='text-center'>
              <h2
                className='pb-12 text-3xl font-extrabold tracking-tight sm:text-4xl'
                data-aos='fade-left'
                data-aos-duration='1000'
              >
                {" "}
                Message us
              </h2>
            </div>
            <form
              onSubmit={sendEmail}
              className='grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 align-right'
            >
              <div>
                <label
                  htmlFor='first-name'
                  className='block text-sm font-medium'
                >
                  First name
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='first-name'
                    id='first-name'
                    autoComplete='given-name'
                    required
                    className='block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='last-name'
                  className='block text-sm font-medium'
                >
                  Last name
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='last-name'
                    id='last-name'
                    required
                    autoComplete='family-name'
                    className='block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <label htmlFor='email' className='block text-sm font-medium'>
                  Email
                </label>
                <div className='mt-1'>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    autoComplete='email'
                    required
                    className='block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
                  />
                </div>
              </div>

              <div className='sm:col-span-2'>
                <label htmlFor='message' className='block text-sm font-medium'>
                  Message
                </label>
                <div className='mt-1'>
                  <textarea
                    id='message'
                    name='message'
                    rows={4}
                    required
                    className='block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <button
                  type='submit'
                  className='inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-orange hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  formTarget='_blank'
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
