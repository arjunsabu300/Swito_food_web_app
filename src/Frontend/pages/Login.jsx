import { LockIcon, PhoneIcon } from "lucide-react";
import React from "react";
import { Button } from "../components/Button";
import { Card, CardContent } from "../components/card";
import { Input } from "../components/input";

const LoginPage = ()=> {
  // Data for form fields
  const formFields = [
    {
      icon: <PhoneIcon className="w-[23px] h-[23px] text-gray-500" />,
      placeholder: "123456789",
      type: "tel",
    },
    {
      icon: <LockIcon className="w-[23px] h-[23px] text-gray-500" />,
      placeholder: "••••••",
      type: "password",
    },
  ];

  return (
    <div
      className="bg-transparent flex flex-row justify-center w-full"
      data-model-id="8:387"
    >
      <div className="w-full max-w-[1550px]">
        <div className="bg-white min-h-[895px]">
          <div className="relative w-full">
            {/* Header section */}
            <header className="w-full h-[150px] bg-[url(https://c.animaapp.com/mcf16xekP2Q5Ev/img/image-3.png)] bg-cover bg-center">
              <div className="flex justify-center items-end h-full pb-16">
                <h1 className="font-normal text-[40.2px] text-[#f3f4f2] [font-family:'Inter',Helvetica]">
                  Login
                </h1>
              </div>
            </header>

            {/* Main content section */}
            <main className="w-full bg-[url(https://c.animaapp.com/mcf16xekP2Q5Ev/img/background.png)] bg-cover bg-center py-9 min-h-[595px]">
              <div className="max-w-[703px] mx-auto">
                <div className="px-6">
                  <h2 className="text-[41.8px] font-normal text-[#504f52] [font-family:'Inter',Helvetica] mb-10">
                    Sign in
                  </h2>

                  <div className="mb-10">
                    <span className="text-[21.4px] font-medium text-[#979395] [font-family:'Inter',Helvetica] mr-4">
                      or
                    </span>
                    <a
                      href="/register"
                      className="text-[22.1px] font-medium text-[#f3b464] [font-family:'Inter',Helvetica]"
                    >
                      create an account
                    </a>
                  </div>

                  <Card className="bg-transparent border-0 shadow-none mb-6">
                    <CardContent className="p-0">
                      {formFields.map((field, index) => (
                        <div key={index} className="mb-5">
                          <div className="relative">
                            <div className="absolute left-6 top-1/2 transform -translate-y-1/2">
                              {field.icon}
                            </div>
                            <Input
                              type={field.type}
                              placeholder={field.placeholder}
                              className="h-[79px] bg-[#f8f9f8] rounded-md pl-[76px] text-[18.9px] text-[#9c9a9c] [font-family:'Inter',Helvetica]"
                            />
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Button className="w-full h-[67px] bg-[url(https://c.animaapp.com/mcf16xekP2Q5Ev/img/background-1.png)] bg-cover bg-center border-0 rounded-md hover:opacity-90 hover:cursor-pointer">
                    <span className="font-medium text-xl text-[#fbe9de] [font-family:'Inter',Helvetica]">
                      LOGIN
                    </span>
                  </Button>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;