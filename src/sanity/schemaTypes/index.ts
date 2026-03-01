import { type SchemaTypeDefinition } from "sanity";

import { categoryType } from "./categoryType";
import { dishType } from "./dishType";
import { contactMessageType } from "./contactMessageType";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [categoryType, dishType, contactMessageType],
};
