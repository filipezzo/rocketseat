import { Navigate } from "react-router-dom";
import { cn } from "../../../app/lib/utils/cn";
import logo from "../../assets/Logo.svg";
import { Table } from "../../components/table/Table";
import Contact from "../components/Contact";
import { Hero } from "../home/components/hero";
import { useConviteController } from "../home/controllers/useConviteController";

export function Convite() {
  const { final, initial, state } = useConviteController();
  if (!state) {
    return <Navigate to="/" />;
  }

  return (
    <div className="mx-auto flex h-[760px] w-full max-w-7xl gap-5 rounded-xl p-5 text-white">
      <Hero />
      <main
        style={{ backgroundColor: state.color }}
        className={cn(
          "flex h-full w-full flex-col overflow-auto rounded-xl p-5 shadow-lg",
        )}
      >
        <header
          className={cn(
            "relative flex w-full items-center justify-center gap-8 rounded-xl bg-cover bg-center bg-no-repeat",
          )}
        >
          <img className="z-10 size-12" src={logo} alt="logo" />
          <h1 className={cn("lucky z-10 mb-1 mt-4 text-[40px]")}>
            {state.title}
          </h1>
        </header>
        <div className="mx-auto my-4 flex w-full max-w-2xl flex-1 flex-col overflow-auto rounded-lg bg-base p-4">
          <Table state={state} initial={initial} final={final} />
          <Contact state={state} />
        </div>
      </main>
    </div>
  );
}
