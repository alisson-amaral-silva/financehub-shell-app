import { urlGoalById } from "@/lib/api-client/resources";
import { MockList } from "../../types";
import { http, HttpResponse } from "msw";
import loadGoals from "./utils/loadGoals";
import { CreateGoalInput, Goal } from "@/lib/api-client/goal/types";

const goalPatchHandler: MockList = {
  patchGoal: http.post(urlGoalById, async ({ request, params: { id } }) => {
    const updates = (await request.json()) as CreateGoalInput;
    let goals = loadGoals();
    const index = goals.findIndex((g) => g.id === id);
    if (index === -1) {
      return HttpResponse.json(
        { success: false, message: "Goal not found" },
        { status: 404 }
      );
    }

    goals[index] = { ...goals[index], ...updates };

    return HttpResponse.json({
      data: goals[index],
      success: true,
      message: "Goal updated successfully",
    });
  }),
};

export default goalPatchHandler;
