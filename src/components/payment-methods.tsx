import { Money, Stripe } from "../assets/icons";

export default function PaymentMethods() {
  return (
    <section
      id="payment-methods"
      className="mt-6 flex items-center justify-center gap-8"
    >
      <Stripe />

      <div className="flex flex-col justify-center items-center">
        <Money />
        <span className="text-center flex-wrap">
          Efectivo en nuestros puntos de venta
        </span>
      </div>
    </section>
  );
}
