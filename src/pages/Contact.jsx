import { FaAt } from "react-icons/fa6";
import {
  MdDeliveryDining,
  MdOutlineAccountCircle,
  MdOutlineDeliveryDining,
  MdOutlineFastfood,
  MdOutlineTableRestaurant,
} from "react-icons/md";
import {
  RiCustomerService2Line,
  RiMoneyDollarCircleLine,
} from "react-icons/ri";

function Contact() {
  return (
    <div className="sm:p-5 sm:ml-10 sm:px-15">
      <h1 className="flex justify-center text-4xl font-macondo text-akvividorange font-bold">
        Contact Us
      </h1>

      <div className="grid sm:grid-cols-3 gap-2 text-lg sm:ml-10 mt-10 ">
        <div className="flex flex-col items-center font-black shadow-2xl dark:shadow-md p-5 shadow-akaccent-600 rounded-2xl">
          <p className="py-2 text-xl text-akvividorange/90">
            If you need help with your{" "}
          </p>
          <p className="flex gap-1 py-2 ">
            <MdOutlineFastfood size={24} />
            <span>order,</span>
          </p>
          <p className="flex gap-1 py-2 ">
            <MdOutlineTableRestaurant size={24} />
            <span>table reservation,</span>
          </p>
          <p className="flex gap-1 py-2">
            <RiMoneyDollarCircleLine size={24} />
            <span>payment,</span>
          </p>
          <p className="flex gap-1 py-2">
            <MdDeliveryDining size={24} />
            <span>delivery,</span>
          </p>
          <p className="flex gap-1 py-2">
            <MdOutlineAccountCircle size={24} /> <span>or account,</span>
          </p>
          <p className="py-2 text-xl text-akvividorange/90">
            we’re here for you.
          </p>
        </div>

        <div className="flex justify-center items-center font-black sm:p-10 ">
          <div className="flex flex-col items-center shadow-2xl dark:shadow-md shadow-akaccent-600 sm:mt-2 sm:my-0 my-5 sm:px-10 sm:py-20 p-10 rounded-2xl">
            <p className="flex gap-1 sm:py-2 items-center">
              <RiCustomerService2Line size={24} />
              <span>Customer Support</span>
            </p>
            <div className="flex gap-1 py-2 items-center">
              <FaAt />
              <span>Phone: </span>
            </div>
            <p>+1 (000) 000-0000</p>
          </div>
        </div>

        <div className="flex items-center">
          <img src="/contactus.svg" alt="Contact us" className="bg-gray-300" />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center sm:text-3xl text-2xl font-macondo text-akvividorange font-bold mt-10 p-5">
        <span>Available 24/7</span>
        <span>for order-related assistance.</span>
      </div>
    </div>
  );
}

export default Contact;
