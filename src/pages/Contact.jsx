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
    <div className="p-5 ml-10 px-15">
      <h1 className="flex justify-center text-4xl font-macondo text-akvividorange font-bold">
        Contact Us
      </h1>

      <div className="grid grid-cols-3 gap-2 text-lg ml-10 mt-10 ">
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

        <div className="flex items-center font-black p-10 shadow-akaccent-600">
          <div className="flex flex-col items-center shadow-2xl  mt-2 px-10 py-20 rounded-2xl">
            <p className="flex gap-1 py-2 items-center">
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

      <p className="flex justify-center text-3xl font-macondo text-akvividorange font-bold mt-10 p-5">
        Available 24/7 for order-related assistance.
      </p>
    </div>
  );
}

export default Contact;
