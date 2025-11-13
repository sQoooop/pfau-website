import { defineType } from "sanity";

export default defineType({
  name: "event",
  type: "document",
  title: "Event",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Event Title",
    },
    {
      name: "date",
      type: "datetime",
      title: "Event Date",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      options: { hotspot: true },
    },
  ],
});
