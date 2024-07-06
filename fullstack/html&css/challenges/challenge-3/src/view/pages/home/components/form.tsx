import { Calendar, PaintRoller, Ticket, User } from "lucide-react";
import { events } from "../../../../app/lib/utils/data/events";
import { Card } from "../../../components/Card";
import { Fieldset } from "../../../components/Fieldset";
import { InputLabel } from "../../../components/InputLabel";
import { TextArea } from "../../../components/TextArea";
import { useFormController } from "../controllers/useFormController";

export function Form() {
  const { colors, handleSubmit, onSubmitting, register } = useFormController();

  return (
    <main className="h-full w-full overflow-auto rounded-xl bg-shapeBody p-5 shadow-lg">
      <form
        onSubmit={handleSubmit(onSubmitting)}
        className="mx-auto grid w-full max-w-[560px] grid-cols-12 pt-20"
      >
        <Fieldset>
          <legend className="baloo-md col-span-full text-3xl">
            Crie seu convite
          </legend>
        </Fieldset>
        <Fieldset icon={<Calendar />} label="Sobre o evento">
          <InputLabel
            label="Título"
            placeholder="Nome do evento"
            className="col-span-full"
            {...register("title")}
          />
          <div className="col-span-full flex gap-4">
            <InputLabel
              option="col-span-6 flex-1"
              label="Início"
              type="date"
              {...register("startDate")}
            />
            <InputLabel
              option="col-span-6 flex-1"
              label="Fim"
              type="date"
              {...register("endDate")}
            />
          </div>
          <div className="col-span-full flex gap-4">
            <InputLabel
              option="col-span-6 flex-1"
              label="Tipo"
              type="radio"
              {...register("type")}
            />
            <InputLabel
              option="col-span-6 flex-1"
              label="Local"
              placeholder="Link ou endereço"
              {...register("local")}
            />
          </div>

          <TextArea
            label="Descrição"
            placeholder="Escreva sobre os detalhes do evento"
            {...register("description")}
          />
        </Fieldset>

        <Fieldset icon={<PaintRoller />} label="Personalização">
          <h3 className="mb-4">Cor principal</h3>
          <ul className="col-span-full mb-7 flex gap-3">
            {colors.map((color) => {
              return (
                <li
                  className="group relative grid h-10 max-w-10 flex-1 cursor-pointer place-items-center rounded-full bg-base"
                  key={color.id}
                >
                  <input
                    type="radio"
                    className="absolute inset-0 opacity-20 group-hover:cursor-pointer"
                    value={color.color}
                    {...register("color")}
                  />
                  <div
                    className="size-7 rounded-full group-hover:cursor-pointer"
                    style={{ background: color.color }}
                  />
                </li>
              );
            })}
          </ul>
          <h3 className="mb-4">Tema do evento</h3>
          <section className="grid grid-cols-12 gap-2">
            {events.map((e) => (
              <Card key={e.id} e={e} {...register("theme")} />
            ))}
          </section>
        </Fieldset>
        <Fieldset icon={<User />} label="Dados para contato">
          <InputLabel
            label="Nome"
            placeholder="Nome completo"
            {...register("name")}
          />
          <div className="flex w-full gap-4">
            <InputLabel
              option="col-span-6 flex-1"
              label="E-mail"
              placeholder="exemplo@email.com"
              {...register("email")}
            />
            <InputLabel
              option="col-span-6 flex-1"
              label="Telefone"
              placeholder="(99) 99999-9999"
              {...register("phone")}
            />
          </div>
        </Fieldset>

        <Fieldset className="flex flex-col gap-2 border-t border-stroke pt-10">
          <div className="flex items-center gap-3">
            <input type="checkbox" {...register("terms")} />
            <span className="text-gray-500">
              Li e concordo com os Termos e Condições e com a Política de
              Privacidade
            </span>
          </div>

          <div className="flex items-center gap-3">
            <input type="checkbox" {...register("emailTerms")} />
            <span className="text-gray-500">
              Aceito receber atualizações e promoções por e-mail
            </span>
          </div>

          <div className="flex items-center gap-3">
            <input type="checkbox" {...register("smsTerms")} />
            <span className="text-gray-500">
              Aceito receber atualizações e promoções por SMS
            </span>
          </div>
        </Fieldset>
        <button
          type="submit"
          className="col-start-9 col-end-13 flex h-12 items-center gap-3 rounded-lg bg-brandDark px-5 py-4 font-semibold text-textHeading transition-opacity hover:opacity-80"
        >
          <Ticket />
          <span className="text-sm md:text-[16px]">Gerar convite</span>
        </button>
      </form>
    </main>
  );
}
