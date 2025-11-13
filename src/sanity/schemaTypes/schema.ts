import { createSchema } from "sanity";
import schemaTypes from "all:part:@sanity/base/schema-type";

import settings from "./settings";
import menuItem from "./menuItem";
import event from "./event";
import booking from "./booking";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([settings, menuItem, event, booking]),
});
