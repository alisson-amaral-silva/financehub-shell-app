import { http, HttpResponse } from "msw";
import { MockList } from "../../types";
import { urlGoalById, urlGoals } from "../../../resources";
import loadGoals from "./utils/loadGoals";

const goalGetHandler: MockList = {
  getGoals: http.get(urlGoals, () => {
    let goals = loadGoals();
    return HttpResponse.json({
      data: goals,
      success: true,
    });
  }),
  getGoalById: http.get(urlGoalById, async ({ params: { id } }) => {
    let goals = loadGoals();
    const goalById = goals.find((t) => t.id === id);

    if (!goalById) {
      return HttpResponse.json(
        { success: false, message: "Goal not found" },
        { status: 404 }
      );
    }

    return HttpResponse.json({
      data: goalById,
      success: true,
    });
  }),
};

export default goalGetHandler;
