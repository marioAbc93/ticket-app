/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { EventNameResponse, EventName } from "../models/entities";
import { getEventsName, buyTicket } from "../services";
import { useNotification } from "../models/context/useNotification";

export default function AdminSellForm() {
  const [eventData, setEventData] = useState<EventNameResponse | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<EventName | null>(null);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const { getSuccess, getError } = useNotification();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      last_name: "",
      customer_mail: "",
      event_id: "",
      ticket_quantity: "1",
      payment_method: "cash",
    },
  });

  const ticketQuantity = watch("ticket_quantity");

  const handleFetch = () => {
    getEventsName().then((res: EventNameResponse) => {
      setEventData(res);
    });
  };

  useEffect(() => {
    handleFetch();
  }, []);

  useEffect(() => {
    const quantity = parseInt(ticketQuantity, 10);
    if (selectedEvent && !isNaN(quantity) && quantity > 0) {
      setTotalPrice(selectedEvent.ticket_value * quantity);
    }
  }, [selectedEvent, ticketQuantity]);

  const handleEventChange = (eventId: string) => {
    const selected = eventData?.events.find(
      (ev: any) => ev.id === Number(eventId)
    );
    setSelectedEvent(selected || null);
    setValue("event_id", eventId);
  };

  const onSubmit = async (data: any) => {
    const processedData = {
      ...data,
      event_id: Number(data.event_id),
      ticket_quantity: Number(data.ticket_quantity),
    };

    try {
      await buyTicket(processedData.event_id, processedData);
      getSuccess("Compra de ticket realizada con éxito");
    } catch (error) {
      getError(`La cantidad de tickets ingresada supera los disponibles`);
      console.error("Error al comprar el ticket:", error);
    }
  };

  return (
    <div className="container my-4">
      <div className="bg-white rounded-lg shadow-lg p-4 px-4 md:p-8 mb-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-2">
            <div className="lg:col-span-2">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-5">
                  <label htmlFor="name">Nombre</label>
                  <input
                    type="text"
                    {...register("name", {
                      required: "El nombre es obligatorio",
                    })}
                    id="name"
                    className={`h-10 border mt-1 rounded px-4 w-full bg-gray-50 ${
                      errors.name ? "border-red-500" : ""
                    }`}
                  />
                  {errors.name && (
                    <span className="text-red-500 text-sm">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                <div className="md:col-span-5">
                  <label htmlFor="last_name">Apellído</label>
                  <input
                    type="text"
                    {...register("last_name", {
                      required: "El apellido es obligatorio",
                    })}
                    id="last_name"
                    className={`h-10 border mt-1 rounded px-4 w-full bg-gray-50 ${
                      errors.last_name ? "border-red-500" : ""
                    }`}
                  />
                  {errors.last_name && (
                    <span className="text-red-500 text-sm">
                      {errors.last_name.message}
                    </span>
                  )}
                </div>

                <div className="md:col-span-5">
                  <label htmlFor="customer_mail">Correo electrónico</label>
                  <input
                    type="email"
                    {...register("customer_mail", {
                      required: "El correo electrónico es obligatorio",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "El correo electrónico no es válido",
                      },
                    })}
                    id="customer_mail"
                    className={`h-10 border mt-1 rounded px-4 w-full bg-gray-50 ${
                      errors.customer_mail ? "border-red-500" : ""
                    }`}
                    placeholder="email@domain.com"
                  />
                  {errors.customer_mail && (
                    <span className="text-red-500 text-sm">
                      {errors.customer_mail.message}
                    </span>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="event_id">Evento</label>
                  <select
                    {...register("event_id", {
                      required: "El evento es obligatorio",
                    })}
                    className={`h-10 border mt-1 rounded px-4 w-full bg-gray-50 ${
                      errors.event_id ? "border-red-500" : ""
                    }`}
                    onChange={(e) => handleEventChange(e.target.value)}
                  >
                    <option value="">Selecciona un evento</option>
                    {eventData?.events.map((event, index) => (
                      <option key={index} value={event.id}>
                        {event.name}
                      </option>
                    ))}
                  </select>
                  {errors.event_id && (
                    <span className="text-red-500 text-sm">
                      {errors.event_id.message}
                    </span>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="ticket_quantity">
                    ¿Cuantas boletas desea comprar?
                  </label>
                  <div className="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                    <input
                      type="number"
                      {...register("ticket_quantity", {
                        required: "La cantidad de tickets es obligatoria",
                        min: {
                          value: 1,
                          message: "Debes comprar al menos 1 ticket",
                        },
                        max: {
                          value: 10,
                          message: "No puedes comprar más de 10 tickets",
                        },
                      })}
                      id="ticket_quantity"
                      className={`px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent ${
                        errors.ticket_quantity ? "border-red-500" : ""
                      }`}
                      defaultValue="1"
                    />
                  </div>
                  {errors.ticket_quantity && (
                    <span className="text-red-500 text-sm">
                      {errors.ticket_quantity.message}
                    </span>
                  )}
                </div>

                <div className="md:col-span-1">
                  <label>Valor a pagar</label>
                  <div className="h-10 w-28 rounded items-center mt-1">
                    <span className="text-blue-600 font-bold">
                      ${totalPrice}
                    </span>
                  </div>
                </div>

                <div className="md:col-span-5 text-right">
                  <div className="inline-flex items-end">
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Vender ticket(s)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
