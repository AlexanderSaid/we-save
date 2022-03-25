import React from "react";
import { FaShoppingBasket } from "react-icons/fa";

const BasketInfo = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="p-4 max-w-2xl bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Available Baskets
          </h3>
          <a
            href="#"
            className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Go to Shop
          </a>
        </div>
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <FaShoppingBasket size={40} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Bakery, Snacks
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    1.2 km away
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  €4.99
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <FaShoppingBasket size={40} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Grocery
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    0.8 km away
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  €3.99
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BasketInfo;
