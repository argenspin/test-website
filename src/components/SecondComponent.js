import React from "react";

function SecondComponent() {
  return (
    <div className="h-screen flex flex-col overflow-hidden ">
      <div className=" h-full w-full p-20  relative z-1">
        <div className="flex items-center justify-start  flex-row-reverse h-full">
          <div className="h-full w-1/2 ">
            <div className="flex flex-col items-center justify-center h-full p-5">
              <div className="h-full  w-full flex flex-col items-center justify-start p-5">
                <div className="flex items-center justify-start space-x-3 w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-9 h-9 animate-bounce text-blue-500"
                  >
                    <path d="M9.375 3a1.875 1.875 0 000 3.75h1.875v4.5H3.375A1.875 1.875 0 011.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0112 2.753a3.375 3.375 0 015.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 10-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3zM11.25 12.75H3v6.75a2.25 2.25 0 002.25 2.25h6v-9zM12.75 12.75v9h6.75a2.25 2.25 0 002.25-2.25v-6.75h-9z" />
                  </svg>

                  <h1 className="text-2xl font-bold">Odoo Implementation</h1>
                </div>

                <p className="w-full">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur impedit, pariatur maxime eius dicta cupiditate
                  quos tempore sunt, voluptatem tenetur reprehenderit beatae
                  corporis quibusdam, itaque cumque perferendis neque
                  perspiciatis doloremque!
                </p>
              </div>
              <div className="h-full  w-full flex flex-col items-center justify-start p-5">
                <div className="flex items-center justify-start space-x-3 w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-9 h-9 animate-bounce text-blue-500"
                  >
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                  </svg>

                  <h1 className="text-2xl font-bold">Odoo Implementation</h1>
                </div>
                <p className="w-full">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur impedit, pariatur maxime eius dicta cupiditate
                  quos tempore sunt, voluptatem tenetur reprehenderit beatae
                  corporis quibusdam, itaque cumque perferendis neque
                  perspiciatis doloremque!
                </p>
              </div>
            </div>
          </div>

          <div className="w-1/2 h-auto  flex items-center justify-center shadow-xl z-[2] ">
            <img
              className="h-full w-full object-contain rounded-lg"
              src="https://www.syncoria.com/wp-content/uploads/2020/06/odoo-studio_1-min.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="absolute bg-gray-600 h-[800px] w-full top-0  skew-x-[110deg] opacity-20 left-0 z-0"></div>
      </div>
    </div>
  );
}

export default SecondComponent;
