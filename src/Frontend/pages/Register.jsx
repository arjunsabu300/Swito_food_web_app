import React from "react";
import { Button } from "../components/Button";
import { Card, CardContent } from "../components/card";
import { Input } from "../components/input";
export const RegisterPage = () => {
  // Form field data for mapping
  const formFields = [
    {
      id: "phone",
      placeholder: "Enter Phone Number",
      type: "tel",
      icon: "https://c.animaapp.com/mceys530u3FPFX/img/image-3.png",
    },
    {
      id: "password",
      placeholder: "Enter Password",
      type: "password",
      icon: "https://c.animaapp.com/mceys530u3FPFX/img/image-2.png",
    },
    {
      id: "confirmPassword",
      placeholder: "Confirm Password",
      type: "password",
      icon: "https://c.animaapp.com/mceys530u3FPFX/img/image-2.png",
    },
  ];



  return (
    <main
      className="bg-transparent flex flex-row justify-center w-full"
      data-model-id="10:2"
    >
      <div className="w-full max-w-[1550px]">
        <div className="bg-white">
          <div className="relative">
            {/* Header section */}
            <header className="w-full h-[200px] bg-[url(https://c.animaapp.com/mceys530u3FPFX/img/image-4.png)] bg-cover bg-center">
              <div className="flex justify-center items-center h-full pt-[120px]">
                <h1 className="font-normal text-[40.2px] text-[#f3f4f2] [font-family:'Inter',Helvetica]">
                  Register
                </h1>
              </div>
            </header>

            {/* Form section */}
            <section className="w-full h-[595px] bg-[url(https://c.animaapp.com/mceys530u3FPFX/img/background.png)] bg-cover bg-center">
              <div className="flex justify-center pt-9">
                <Card className="w-[666px] bg-transparent border-0 shadow-none">
                  <CardContent className="p-0">
                    <h2 className="font-medium text-[40px] text-[#f3b464] [font-family:'Inter',Helvetica] mb-12">
                      Create an Account
                    </h2>

                    <form className="space-y-6">
                      {formFields.map((field) => (
                        <div key={field.id} className="relative">
                          <div className="relative bg-[#f8f8f9] rounded-md h-[79px] flex items-center">
                            <img
                              className="w-6.85 h-[27px] ml-6 object-cover"
                              alt="Icon"
                              src={field.icon}
                            />
                            <Input
                              type={field.type}
                              placeholder={field.placeholder}
                              className="border-0 bg-transparent h-full pl-[75px] absolute inset-0 [font-family:'Inter',Helvetica] font-normal text-[18.9px] text-[#9c9a9c] placeholder:text-[#9c9a9c] focus-visible:ring-0 focus-visible:ring-offset-0"
                            />
                          </div>
                        </div>
                      ))}

                      <Button className="w-full h-[67px] mt-8 bg-[url(https://c.animaapp.com/mceys530u3FPFX/img/background-1.png)] bg-cover bg-center text-xl font-medium text-[#fbe9de] [font-family:'Inter',Helvetica] hover:opacity-90 hover:cursor-pointer">
                        REGISTER
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};
