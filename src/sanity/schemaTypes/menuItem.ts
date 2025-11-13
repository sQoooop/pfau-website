import { defineType } from "sanity";

export default defineType({
  name: "menuItem",
  type: "document",
  title: "Menu Item",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
    {
      name: "price",
      type: "number",
      title: "Price",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      options: { hotspot: true },
    },
  ],
});
