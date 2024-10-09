/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { Event } from "../../models/entities";
import { loadStripe } from "@stripe/stripe-js";
import { useModal } from "../../models/context/useModal";
import { useNotification } from "../../models/context/useNotification";
import {
  Elements,
  CardElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { buyTicket } from "../../services";

const stripePromise = loadStripe(
  import.meta.env.VITE_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ""
);

interface PayFormProps {
  event: Event;
}

interface PayFormData {
  name: string;
  last_name: string;
  customer_mail: string;
  payment_method: string;
  ticket_quantity: number;
}

function PayLanding({ event }: PayFormProps) {
  const { getError, getSuccess } = useNotification();
  const { setOpen } = useModal();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<PayFormData>({ mode: "onChange" });

  const stripe = useStripe();
  const elements = useElements();

  const onSubmit = async (data: PayFormData) => {
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) return;

    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: {
        name: data.name,
        email: data.customer_mail,
      },
    });

    if (error) {
      console.error("Error en el pago:", error);
      getError("Hubo un error al procesar el pago.");
    } else if (paymentMethod) {
      console.log("Método de pago creado:", paymentMethod);

      const requestBody: any = {
        event_id: event.id,
        payment_method: "stripe",
        name: data.name,
        last_name: data.last_name,
        customer_mail: data.customer_mail,
        ticket_quantity: data.ticket_quantity,
      };

      try {
        await buyTicket(event.id, requestBody);
        getSuccess("Compra de ticket realizada con éxito");
        reset();

        setOpen(false);
      } catch (error) {
        getError("La cantidad de tickets ingresada supera los disponibles.");
        console.error("Error al comprar el ticket:", error);
      }
    }
  };

  return (
    <div className="flex flex-col gap-2 p-4">
      <h4 className="text-center font-bold">¡{event.name} nos espera!</h4>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-left" htmlFor="name">
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
            className="border rounded-lg  p-1"
          />
          {errors.name && (
            <span className="text-red-600">Nombre es requerido</span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-left" htmlFor="last_name">
            Apellido:
          </label>
          <input
            type="text"
            id="last_name"
            {...register("last_name", { required: true })}
            className="border rounded-lg p-1"
          />
          {errors.last_name && (
            <span className="text-red-600">Apellido es requerido</span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-left" htmlFor="customer_mail">
            Correo electrónico:
          </label>
          <input
            type="email"
            id="customer_mail"
            {...register("customer_mail", { required: true })}
            className="border rounded-lg p-1"
          />
          {errors.customer_mail && (
            <span className="text-red-600">Correo es requerido</span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="ticket_quantity">
            ¿Cuántas boletas desea comprar?
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
            <span className="text-red-600">
              {errors.ticket_quantity.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-left">Método de pago:</label>
          <CardElement className="border p-2 rounded-lg" />
        </div>

        <button
          type="submit"
          disabled={!isValid}
          className={`active:scale-95 mt-4 text-white font-bold py-2 px-4 rounded ${
            isValid ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400"
          }`}
        >
          Pagar con Stripe
        </button>
        <button
          onClick={() => setOpen(false)}
          className="active:scale-95  text-white font-bold py-2 px-4 rounded bg-red-400"
        >
          Pagar con Stripe
        </button>
      </form>
    </div>
  );
}

export function PayLandingWrapper({ event }: PayFormProps) {
  return (
    <Elements stripe={stripePromise}>
      <PayLanding event={event} />
    </Elements>
  );
}
