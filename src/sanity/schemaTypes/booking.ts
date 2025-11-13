import { defineType } from "sanity";

export default defineType({
  name: "booking",
  type: "document",
  title: "Booking",
  fields: [
    { name: "name", type: "string", title: "Name" },
    { name: "email", type: "string", title: "Email" },
    { name: "phone", type: "string", title: "Phone" },
    { name: "date", type: "datetime", title: "Reservation Date & Time" },
    { name: "guests", type: "number", title: "Number of Guests" },
  ],
});