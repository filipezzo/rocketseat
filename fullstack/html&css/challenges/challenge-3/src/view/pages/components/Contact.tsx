import { IFormData } from "../../../app/models/formdata";

export default function Contact({ state }: { state: IFormData }) {
  return (
    <div className="flex flex-1 flex-col rounded-lg p-4">
      <h2 className="lucky mb-4 text-4xl">Observação</h2>
      <p className="">{state.description}</p>
      <footer className="mt-auto">
        <strong className="lucky">Contato</strong>
        <div className="flex justify-between p-4">
          <small className="font-semibold">{state.name}</small>
          <small className="font-semibold">{state.email}</small>
          <small className="font-semibold">{state.phone}</small>
        </div>
      </footer>
    </div>
  );
}
