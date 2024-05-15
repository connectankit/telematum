import React from "react";
import appoitmentData from "../utils/appoitmentData.json";
const TableData = () => {

    const formatDate = (inputDate) => {
        const date = new Date(inputDate);
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        return date.toLocaleDateString('en-GB', options);
    }
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          height: "100vh",
        }}
      >
        <div className="px-2.5 py-2.5" style={{ width: "90%", height: "100%" }}>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <caption class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-gray-400">
                {/* Today's Appointment List For Hitesh Bro */}
                hello world
              </caption>
              <thead
                class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                style={{ background: "#fafafb" }}
              >
                <tr>
                  <th scope="col" class="px-6 py-3">
                    PATIENTS
                  </th>
                  <th scope="col" class="px-6 py-3">
                    DATE
                  </th>
                  <th scope="col" class="px-6 py-3">
                    TIME
                  </th>
                  <th scope="col" class="px-6 py-3">
                    DOCTOR
                  </th>
                  <th scope="col" class="px-6 py-3">
                    INJURY
                  </th>
                  <th scope="col" class="px-6 py-3">
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody>
                {appoitmentData.appointments.map(
                  ({
                    patient_name,
                    mobile_number,
                    appointment_date,
                    appointment_time,
                    doctor,
                    injury,
                  }) => (
                    <tr class="bg-white border-b  dark:border-gray-200 hover:bg-gray-50 ">
                      <th
                        scope="row"
                        class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <img
                          class="w-10 h-10 rounded-full"
                          src="	https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                          alt=""
                        />
                        <div class="ps-3">
                          <div class="text-base font-semibold text-black ">
                            {patient_name}
                          </div>
                          <div class="font-normal text-gray-500">
                            + {mobile_number}
                          </div>
                        </div>
                      </th>
                      <td class="px-6 py-1">
                        <div class="flex items-center gap-2">
                          <div>
                            <svg
                              class="w-4 h-4 text-gray-800 dark:text-gray"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 20"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 1v3m5-3v3m5-3v3M1 7h18M5 11h10M2 3h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
                              ></path>
                            </svg>
                          </div>
                          {formatDate(appointment_date)}
                        </div>
                      </td>

                      <td class="px-6 py-4">
                        <div class="flex items-center gap-2">
                          <div>
                            <svg
                              class="w-4 h-4 text-gray-800 dark:text-gray"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="gray"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
                            </svg>
                          </div>
                          {appointment_time}
                        </div>
                      </td>

                      <td class="px-6 py-4">
                        <div class="flex items-center">
                          <span
                            class="inline-flex items-center justify-center w-4 h-4 me-2 text-sm font-semibold text-gray-800 bg-gray-100 rounded-full"
                            style={{ background: "#66cb9f" }}
                          >
                            <svg
                              class="w-2 h-2 text-gray-200"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                          </span>
                          {doctor}
                        </div>
                      </td>
                      <td class="px-6 py-4">
                        <span
                          class="bg-gray-400 text-gray-800 text-sm font-medium me-2 px-3.5 py-1.5 rounded "
                          style={{ background: "#e3ecf7" }}
                        >
                          {injury}
                        </span>
                      </td>
                      <td class="px-6 py-4">
                        <svg
                          class="w-4 h-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 4 15"
                        >
                          <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                        </svg>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableData;
