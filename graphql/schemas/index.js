// schema.js
import { gql } from "apollo-server";
import { articleSchema } from "./articleSchema.js";
import { soldSchema } from "./soldSchema.js";
import { transferSchema } from "./transferSchema.js";
import { authSchema } from "./authSchema.js";

const rootSchema = gql`
  scalar Date

  # Combine all the imported schemas here
  ${articleSchema}
  ${soldSchema}
  ${transferSchema}
  ${authSchema}
`;

export default rootSchema;
