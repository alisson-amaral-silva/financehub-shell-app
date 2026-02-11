import { MockList } from "../../types";
import transactionGetHandler from "./transactionGetHandler";
import transactionsSearchHandler from "./transactionsSearchHandler";
import transactionPostHandler from "./transactionPostHandler";
import transactionPatchHandler from "./transactionPatchHandler";
import transactionDeleteHandler from "./transactionDeleteHandler";

const handlers: MockList = {
  ...transactionsSearchHandler,
  ...transactionGetHandler,
  ...transactionPostHandler,
  ...transactionPatchHandler,
  ...transactionDeleteHandler
};

export default handlers;
