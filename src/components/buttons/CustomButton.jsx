import Preloader from "../mics/Preloader";

export const CustomButton = ({
  labelText,
  variant = "font-medium ",
  containerVariant = "py-4 px-5 rounded-full flex justify-center",
  buttonVariant = "primary",
  isDisabled = false,
  isLoading = false,
  icon,
}) => {
  return (
    <button
      type="submit"
      className={`${variant} shadow-md ${
        isDisabled
          ? `${
              buttonVariant === "primary" &&
              `bg-[#A9083680] text-[#E0B8C4] cursor-not-allowed py-3`
            } ${
              buttonVariant === "secondary" &&
              `border-[1.5px] border-[#E0B8C4] text-[#E0B8C4] cursor-not-allowed py-3`
            }`
          : `${
              buttonVariant === "primary" &&
              `bg-[#FF0202] hover:bg-[#FF0202] text-white py-3 cursor-pointer`
            } ${
              buttonVariant === "secondary" &&
              `bg-[#ECF1FC] border-[1.5px] border-[#ECF1FC] text-[#0D369F] py-3 cursor-pointer`
            }`
      } 
      ${containerVariant}`}
      disabled={isDisabled}
    >
      <div className="flex items-center">
        {icon?.active && (
          <div className={`${icon.variant}`}>{icon.preview}</div>
        )}
        {isLoading ? <Preloader variant="w-6 h-6" /> : labelText}
      </div>
    </button>
  );
};
