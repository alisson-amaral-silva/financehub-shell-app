import { urlGoalById } from "@/lib/api-client/resources";
import { MockList } from "../../types";
import { http, HttpResponse } from "msw";
import loadGoals from "./utils/loadGoals";

const goalDeleteHandler: MockList = {
  deleteGoal: http.delete(urlGoalById,  async ({ params: { id } }) => {
    let goals = loadGoals();

    const index = goals.findIndex(t => t.id === id);
    if (index === -1) {
      return HttpResponse.json(
        { success: false, message: 'Goal not found' },
        { status: 404 }
      );
  }})
}

export default goalDeleteHandler