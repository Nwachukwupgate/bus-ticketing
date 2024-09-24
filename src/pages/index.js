import NavBar from '../components/layouts/header'; 
import LeadershipSection from '../components/LeadershipSection';
import Typewriter from 'typewriter-effect';
import { fans } from '../data';
import FeaturesSection from '../components/FeatureSection';
import MapComponent from '../components/CustomMap';
import SubscriptionPlans from '../components/SubscriptionPlan';
import Footer from '../components/layouts/footer';

const HomePage = () => {
  return (
    <main className="bg-white dark:bg-gray-900 w-full">
      <div className=''>
        <NavBar />
        <div className="min-h-screen flex">
          <div className=" lg:mx-auto px-6 py-6 md:py-32 lg:pt-36 md:px-20  lg:px-20">
            <div className="flex items-center flex-wrap gap-12 lg:gap-0 mt-16">
              <div className="md:w-full lg:w-5/12 space-y-8 ">
                <span className="flex space-x-2">
                  <span className="block w-14 mb-2 border-b-2 border-gray-600"></span>
                  <span className="font-medium text-gray-600 dark:text-gray-400 text-sm md:text-lg lg:text-xl">New this period?</span>
                </span>
                <h1 className="text-4xl font-bold md:text-6xl lg:text-8xl dark:text-white">
                  The New <br /> Way To Discover
                </h1>
                <p className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300">
                  <span className='inline-block'><Typewriter
                    options={{
                      strings: ['Route Planner', 'Bus Schedules', 'Bus Schedules', 'Traffic Updates', 'Campus Map'],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                  </span>  in Campus and Beat Time.
                </p>
                <div className="flex space-x-4">
                  <button
                    type="button"
                    title="Sign Up"
                    className="w-full py-3 px-6 text-center transition bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 active:bg-gray-700 focus:bg-gray-800 sm:w-max"
                  >
                    <span className="block text-white font-semibold text-lg lg:text-2xl">Sign Up</span>
                  </button>
                  <button
                    type="button"
                    title="show Routes"
                    className="group w-full py-3 px-6 text-center transition dark:active:bg-yellow-800 dark:focus:bg-yellow-900 active:bg-yellow-200 focus:bg-yellow-100 sm:w-max"
                  >
                    <span className="block text-gray-700 dark:text-white font-semibold group-focus:text-yellow-700 dark:group-focus:text-yellow-100 text-lg lg:text-2xl">
                      Our routes
                    </span>
                  </button>
                </div>
              </div>

              <div className="hidden relative md:block lg:w-7/12">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 m-auto w-[30rem] h-[30rem] rounded-full bg-yellow-200"
                ></div>
                <img src="./bus.png" className="relative ml-auto" alt="shoes" />
              </div>
            </div>
          </div>
          {/* <div className="absolute bottom-8 w-full pt-6">
            <div className="container m-auto px-6 flex items-end justify-between md:px-12 lg:px-7">
              <a href="" className="hidden space-x-4 md:flex md:items-center">
                <img className="w-14 h-14 rounded-full object-cover" src="https://tailus.io/sources/blocks/ecommerce-shoes/preview/images/user.png" alt="user" />
                <div className="text-gray-600 dark:text-gray-300">
                  <span className="block font-semibold">Online Assistant</span>
                  <span className="block text-sm">Online, Help center</span>
                </div>
              </a>

              <div className="hidden space-x-4 md:flex md:items-center">
                <button
                  type="button"
                  title="Start buying"
                  className="w-full py-3 px-6 text-center transition dark:bg-gray-700 bg-gray-900 hover:bg-gray-800 active:bg-gray-700 focus:bg-gray-800 md:w-max"
                >
                  <span className="block text-white font-semibold">Find more</span>
                </button>
                <button
                  type="button"
                  title="Start buying"
                  className="group w-full py-3 px-6 text-center transition dark:active:bg-yellow-800 dark:focus:bg-yellow-900 active:bg-yellow-200 focus:bg-yellow-100 md:w-max"
                >
                  <span className="block text-gray-700 dark:text-white font-semibold group-focus:text-yellow-700 dark:group-focus:text-yellow-100">
                    Routes Today
                  </span>
                </button>
              </div>
            </div>
          </div> */}
        </div>

        <h1 className='font-bold text-2xl md:text-5xl lg:text-8xl dark:text-white text-black text-center lg:my-8 lg:h-screen flex justify-center items-center px-4 md:px-8'>
          Welcome to CampusConnect where we make your campus life a breeze
        </h1>

        <div>
          <LeadershipSection />
        </div>

        <div className="py-16">
          <div className="px-6 text-gray-600 dark:text-gray-300 md:px-12 xl:px-6">
            <div className="mb-20 space-y-4 px-6 md:px-0">
              <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl lg:text-6xl">
                We have some fans.
              </h2>
            </div>
            <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
              {fans.map((fan, index) => (
                <div
                  key={index}
                  className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none"
                >
                  <div className="flex gap-4">
                    <img className="w-12 h-12 rounded-full" src={fan.imgSrc} alt={fan.name} loading="lazy" />
                    <div>
                      <h6 className="text-lg md:text-xl lg:text-3xl font-medium text-gray-700 dark:text-white">{fan.name}</h6>
                      <p className="text-sm md:text-base lg:text-lg text-gray-500 dark:text-gray-400">{fan.role}</p>
                    </div>
                  </div>
                  <p className="mt-8 text-sm md:text-base lg:text-lg">{fan.feedback}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <FeaturesSection />
        </div>

        <div>
          <SubscriptionPlans />
        </div>

        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-center text-2xl md:text-4xl lg:text-6xl font-bold mb-6 dark:text-white">Our Campus Map</h1>
          <div className="w-full">
            <MapComponent />
          </div>
        </div>       
      </div>
      <div>
          <Footer />
        </div>
    </main>
  );
}

export default HomePage;
