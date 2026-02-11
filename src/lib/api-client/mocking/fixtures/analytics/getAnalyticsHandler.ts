import { http, HttpResponse } from "msw";
import { MockList } from "../../types";
import {
  urlIncomeCategories,
  urlIncomeExpenses,
  urlIncomeWeeklySpending,
  urlIncomeBalanceTrend,
} from "../../../resources";
import loadExpenseList from "./utils/loadIncomeExpenses";
import loadCategoryExpense from "./utils/loadCategoryExpense";
import loadWeeklySpending from "./utils/loadWeeklySpending";
import loadBalanceTrend from "./utils/loadBalanceTrend";

const analyticsGetHandler: MockList = {
  getIncomeExpenses: http.get(urlIncomeExpenses, () => {
    const incomeExpenses = loadExpenseList();
    return HttpResponse.json({
      data: incomeExpenses,
      success: true,
    });
  }),
  getCategories: http.get(urlIncomeCategories, () => {
    const categories = loadCategoryExpense();
    return HttpResponse.json({
      data: categories,
      success: true,
    });
  }),
  getWeeklySpendings: http.get(urlIncomeWeeklySpending, () => {
    const weeklySpendings = loadWeeklySpending();
    return HttpResponse.json({
      data: weeklySpendings,
      success: true,
    });
  }),
  getBalanceTrend: http.get(urlIncomeBalanceTrend, () => {
    const balanceTrendList = loadBalanceTrend();
    return HttpResponse.json({
      data: balanceTrendList,
      success: true,
    });
  }),
};

export default analyticsGetHandler;
