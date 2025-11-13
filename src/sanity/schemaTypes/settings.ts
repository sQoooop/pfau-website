import { defineType } from "sanity";

export default defineType({
  name: "settings",
  type: "document",
  title: "Settings",
  fields: [
    {
      name: "heroImage",
      type: "image",
      title: "Hero Image",
      options: { hotspot: true },
    },
    {
      name: "welcomeText",
      type: "text",
      title: "Welcome Text",
    },
    {
      name: "openingHours",
      type: "string",
      title: "Opening Hours",
    },
    {
      name: "address",
      type: "string",
      title: "Address",
    },
    {
      name: "phone",
      type: "string",
      title: "Phone",
    },
    {
      name: "email",
      type: "string",
      title: "Email",
    },
  ],
});
