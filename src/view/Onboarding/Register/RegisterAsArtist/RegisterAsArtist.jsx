import React from "react";
import Hero from "../../../../assets/img/registerhero.png";
import { ReactComponent as Logo } from "../../../../assets/svg/Logo.svg";
import { TextInput } from "../../../../components/reusables/TextInput";
import { CustomButton } from "../../../../components/buttons/CustomButton";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import useRegistration from "./hooks/useRegistration";

const RegisterAsArtist = () => {
  const { handleRegister, loading } = useRegistration();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      stageName: "",
      password: "",
    },

    onSubmit: async (values) => {
      console.log(values);
      await handleRegister({
        ...values,
      });
    },
  });

  const { handleChange, values, handleSubmit } = formik;
  return (
    <>
      <div className="grid grid-cols-1 font-jarkata md:grid-cols-2">
        <div className=" relative text-white h-screen">
          <img src={Hero} className="h-screen w-full object-cover" alt="hero" />
          <div className="absolute mt-10 ml-20 top-0">
            <div>
              <Logo />
            </div>
            <div className="mt-96 text-6xl font-bold">
              Take full control <br />
              of your craft
            </div>
          </div>
        </div>

        <div className="w-full text-left h-screen flex justify-center items-center text-white bg-[#1E1E1E]">
          <div className="space-y-5 w-7/12">
            <div className="text-2xl font-bold">Register as an Artist</div>
            <div>
              <TextInput
                name="email"
                label="Email Address"
                placeHolder="Email Address"
                handleChange={handleChange}
                value={values?.email}
              />
            </div>
            <div className="grid grid-cols-2 gap-5">
              <TextInput
                name="firstName"
                label="First Name"
                placeHolder="First Name"
                handleChange={handleChange}
                value={values?.firstName}
              />
              <TextInput
                name="lastName"
                label="Last Name"
                placeHolder="Last Name"
                handleChange={handleChange}
                value={values?.lastName}
              />
            </div>
            <div>
              <TextInput
                name="stageName"
                label="Stage Name"
                handleChange={handleChange}
                value={values?.stageName}
              />
            </div>
            <div>
              <TextInput
                name="password"
                type="password"
                label="Password"
                handleChange={handleChange}
                value={values?.password}
              />
            </div>
            <div className="block" onClick={() => handleSubmit()}>
              <CustomButton
                labelText={"Register"}
                buttonVariant="primary"
                isDisabled={loading}
              />
            </div>
            <div>
              Already have an account?{" "}
              <span
                className="text-[#FF0202] cursor-pointer"
                onClick={() => navigate("/login-artist")}
              >
                {" "}
                Log In
              </span>
            </div>
            <div>
              By signing up you accept our{" "}
              <span className="text-[#FF0202]">terms and condition</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterAsArtist;
