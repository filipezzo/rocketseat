import { IFormData } from "../../../app/models/formdata";

interface Props {
  initial: Date;
  final: Date;
  state: IFormData;
}

export function Table({ state, initial, final }: Props) {
  return (
    <table className="w-full table-auto">
      <thead>
        <tr>
          <th className="p-4 text-left">Data de Inicio</th>
          <th className="p-4 text-left">Data de Fim</th>
          <th className="p-4 text-left">Tipo </th>
          <th className="p-4 text-left">Local</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td className="p-4 text-textBody">
            {initial.toLocaleDateString("pt-br")}
          </td>
          <td className="p-4 text-textBody">
            {final.toLocaleDateString("pt-br")}
          </td>
          <td className="p-4 text-textBody">{state.type}</td>
          <td className="p-4 text-textBody">{state.local}</td>
        </tr>
      </tbody>
    </table>
  );
}
