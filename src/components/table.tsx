import { Search } from "../assets/icons";
import { TableProps } from "../models/types";
import ActionTableButton from "./action-table-button";
import { Pagination } from "./pagination";

export default function Table({
  searchBar,
  placeholder,
  buttonAction,
  buttonLabel,
  data = [],
  headers = [],
  total_pages,
  current_page,
  onPageChange,
  actions = [],
}: TableProps) {
  const dataArray = Array.isArray(data) ? data : [];
  return (
    <>
      {searchBar && (
        <div className="flex justify-between items-center my-2">
          <form className="w-max">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <Search />
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder={placeholder}
                required
              />
            </div>
          </form>

          <button
            onClick={buttonAction}
            className="bg-blue-600 text-white font-bold px-4 py-2 rounded-lg active:scale-95"
          >
            {buttonLabel}
          </button>
        </div>
      )}

      <div className="relative flex flex-col justify-center items-center gap-4 mt-4 overflow-x-auto sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200">
            <tr>
              {headers.map((header, index) => (
                <th key={index} scope="col" className="px-6 py-3">
                  {header.label}
                </th>
              ))}
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {dataArray.length === 0 ? (
              <tr>
                <td
                  colSpan={headers.length + 1}
                  className="px-6 py-4 text-center"
                >
                  No hay datos disponibles
                </td>
              </tr>
            ) : (
              data.map((item, index) => (
                <tr key={index} className="border-b">
                  {headers.map((header) => (
                    <td key={header.key} className="px-6 py-4">
                      {item[header.key]}
                    </td>
                  ))}
                  {/* Mapea las acciones fuera de headers.map */}
                  <td className="px-6 py-4 flex gap-2">
                    {actions.map((action, actionIndex) => (
                      <ActionTableButton
                        key={actionIndex}
                        action={() => action.handler(item)}
                        type={action.label}
                      />
                    ))}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        <Pagination
          onPageChange={onPageChange}
          pagination={{ total_pages, current_page }}
        />
      </div>
    </>
  );
}
