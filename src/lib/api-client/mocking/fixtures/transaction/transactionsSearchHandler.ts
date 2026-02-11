import { http, HttpResponse } from "msw";
import { MockList } from "../../types";
import { urlTransactions } from "../../../resources";
import loadTransactions from "./utils/loadTransactions";
import { Transaction } from "@/lib/api-client/transaction/types";
import { reqToParams } from "../utils/util";
import { TRANSACTIONS_SEARCH_PARAM_CATEGORY, TRANSACTIONS_SEARCH_PARAM_PAGE, TRANSACTIONS_SEARCH_PARAM_PAGE_SIZE, TRANSACTIONS_SEARCH_PARAM_SEARCH, TRANSACTIONS_SEARCH_PARAM_TYPE } from "@/lib/api-client/transaction/constants";

const transactionsSearchHandler: MockList = {
  search: http.get(urlTransactions, async({request}) => {
    let data: Transaction[] = loadTransactions()
    const params = reqToParams(request);
    const search = params.get(TRANSACTIONS_SEARCH_PARAM_SEARCH)?.toLowerCase()
    const type = params.get(TRANSACTIONS_SEARCH_PARAM_TYPE)?.toLowerCase()
    const category = params.get(TRANSACTIONS_SEARCH_PARAM_CATEGORY)?.toLowerCase()
    const page = parseInt(params.get(TRANSACTIONS_SEARCH_PARAM_PAGE) || '1')
    const pageSize = parseInt(params.get(TRANSACTIONS_SEARCH_PARAM_PAGE_SIZE) || '10')

     // Filter by type
    if (type && type !== 'all') {
      data = data.filter(t => t.type === type);
    }

    // Filter by category
    if (category) {
      data = data.filter(t => t.category === category);
    }

    // Filter by search
    if (search) {
      const searchLower = search.toLowerCase();
      data = data.filter(t =>
        t.description.toLowerCase().includes(searchLower)
      );
    }

    // Sort by date (newest first)
    data.sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    // Pagination
    const total = data.length;
    const totalPages = Math.ceil(total / pageSize);
    const startIndex = (page - 1) * pageSize;
    const paginatedTransactions = data.slice(startIndex, startIndex + pageSize);

    return HttpResponse.json({
      data: paginatedTransactions,
      pagination: {
        page,
        pageSize,
        total,
        totalPages,
      },
      success: true,
    });
  }),
};

export default transactionsSearchHandler;
