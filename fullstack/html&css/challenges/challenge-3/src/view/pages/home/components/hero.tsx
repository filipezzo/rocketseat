import { useLocation } from "react-router-dom";
import logo from "../../../assets/Logo.svg";

export function Hero() {
  const { state } = useLocation();
  return (
    <section className="hidden lg:block">
      <div className="h-full w-[400px] rounded-xl bg-[url('./src/view/assets/Background.png')] bg-cover bg-center p-8">
        <img className="size-12" src={logo} alt="logo" />
        <h1 className="lucky mb-1 mt-4 text-[40px] text-pinkShark">
          Festivite
        </h1>
        <p className="text-gray-500">
          {state && state.theme
            ? ` convite de ${state.theme}`
            : "crie um convite digital para o seu evento"}
        </p>
      </div>
    </section>
  );
}
