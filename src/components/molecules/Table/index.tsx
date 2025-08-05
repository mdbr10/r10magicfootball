import Text from "@/components/atoms/Text";
import { ITableProps } from "./types";

function Table({ headers, data }: ITableProps) {
  return (
    <div className="border border-primary-green overflow-hidden w-full rounded-lg h-fit my-auto mx-auto lg:col-span-2">
      <table className="table-fixed w-full h-fit">
        <thead className="bg-primary-green  text-center content-center rounded-xl">
          <tr className="divide-primary-green">
            {headers.map((header, index) => (
              <th key={index} className="p-2">
                <Text size={"text-xl"}>{header}</Text>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="uppercase text-white rounded-lg ">
          {data.map((row, index) => (
            <tr key={index} className="divide-x divide-primary-green">
              {row.map((cell, index) => (
                <td
                  key={index}
                  className="text-center border-t border-primary-green p-2"
                >
                  <Text color="white">{cell}</Text>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
