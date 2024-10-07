/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";

export default function CreateEvent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
      date: "",
      ticket_value: "",
      available_tickets: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Formulario enviado con los siguientes datos:", data);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                <h2 className="leading-relaxed">Crear nuevo evento</h2>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  {/* Event Name */}
                  <div className="flex flex-col">
                    <label className="leading-loose">Nombre del evento</label>
                    <input
                      type="text"
                      {...register("name", {
                        required: "El nombre del evento es obligatorio",
                      })}
                      className={`px-4 py-2 border ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      } focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm rounded-md focus:outline-none text-gray-600`}
                      placeholder="Nombre del evento"
                    />
                    {errors.name && (
                      <span className="text-red-500 text-sm">
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <div className="flex flex-col">
                    <label className="leading-loose">
                      Descripción del evento
                    </label>
                    <input
                      type="text"
                      {...register("description")}
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Descripción opcional"
                    />
                  </div>

                  {/* Date */}
                  <div className="flex flex-col">
                    <label className="leading-loose">Fecha del evento</label>
                    <input
                      type="date"
                      {...register("date", {
                        required: "La fecha del evento es obligatoria",
                      })}
                      className={`px-4 py-2 border ${
                        errors.date ? "border-red-500" : "border-gray-300"
                      } focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm rounded-md focus:outline-none text-gray-600`}
                    />
                    {errors.date && (
                      <span className="text-red-500 text-sm">
                        {errors.date.message}
                      </span>
                    )}
                  </div>

                  {/* Ticket Value */}
                  <div className="flex flex-col">
                    <label className="leading-loose">Valor del ticket</label>
                    <input
                      type="number"
                      {...register("ticket_value", {
                        required: "El valor del ticket es obligatorio",
                        min: {
                          value: 0,
                          message: "El valor debe ser mayor o igual a 0",
                        },
                      })}
                      className={`px-4 py-2 border ${
                        errors.ticket_value
                          ? "border-red-500"
                          : "border-gray-300"
                      } focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm rounded-md focus:outline-none text-gray-600`}
                      placeholder="Valor del ticket"
                    />
                    {errors.ticket_value && (
                      <span className="text-red-500 text-sm">
                        {errors.ticket_value.message}
                      </span>
                    )}
                  </div>

                  {/* Available Tickets */}
                  <div className="flex flex-col">
                    <label className="leading-loose">
                      Cantidad de tickets disponibles
                    </label>
                    <input
                      type="number"
                      {...register("available_tickets", {
                        required:
                          "La cantidad de tickets disponibles es obligatoria",
                        min: {
                          value: 1,
                          message: "Debe haber al menos 1 ticket disponible",
                        },
                        max: {
                          value: 10,
                          message: "El máximo de tickets es 10",
                        },
                      })}
                      className={`px-4 py-2 border ${
                        errors.available_tickets
                          ? "border-red-500"
                          : "border-gray-300"
                      } focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm rounded-md focus:outline-none text-gray-600`}
                      placeholder="Tickets disponibles (máximo 10)"
                    />
                    {errors.available_tickets && (
                      <span className="text-red-500 text-sm">
                        {errors.available_tickets.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Botones */}
                <div className="pt-4 flex items-center space-x-4">
                  <button className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none">
                    <svg
                      className="w-6 h-6 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                  >
                    Crear
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
