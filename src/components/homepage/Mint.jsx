import GradientButton from "../ui/buttons/GradientButton";
import MintInput from "./MintInput";
import OutlineButton from "../ui/buttons/OutlineButton";

const Mint = () => {
  return (
    <section className="relative h-fit bg-black/70 pt-[2.5em] pb-[5em] text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] xl:text-[19.5px] 2xl:text-[20px]">
      <div className="section-padding container mx-auto flex flex-col items-center">
        {/* Leaklight */}
        <div className="absolute top-0 right-0 left-0 mx-auto aspect-square w-[50%] -translate-y-[60%] rounded-full bg-[#ffbe251d] blur-[100px]"></div>

        {/* Connect wallet btn */}
        <GradientButton
          className="relative mb-[2em]"
          //   onClick={() => window.alert("Clicked")}
        >
          Connect Wallet
        </GradientButton>

        {/* Total count */}
        <div className="font-ddt gradient-text relative flex w-[16ch] justify-between text-[1.5em]">
          <p>Total</p>
          <p>51/</p>
        </div>

        {/* Minted count */}
        <div className="font-ddt gradient-text relative flex w-[16ch] justify-between text-[1.5em]">
          <p>Minted</p>
          <p>33333</p>
        </div>

        {/* Mint input  */}
        <MintInput />

        {/* Play to mint */}
        <p className="relative my-[1em] font-semibold">
          Or play for a discount
        </p>
        <OutlineButton>PLAY TO MINT</OutlineButton>
      </div>
    </section>
  );
};

export default Mint;
