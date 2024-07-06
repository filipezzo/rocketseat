import { Form } from "./components/form";
import { Hero } from "./components/hero";
export function Home() {
  return (
    <div className="mx-auto flex h-[760px] w-full max-w-7xl gap-5 rounded-xl bg-shapeBg p-5">
      <Hero />
      <Form />
    </div>
  );
}
