import { urlTransactions } from "@/lib/api-client/resources";
import { MockList } from "../../types";
import { http, HttpResponse } from "msw";
import loadGoals from './utils/loadGoals';
import { CreateGoalInput, Goal } from "@/lib/api-client/goal/types";

const goalPostHandler: MockList = {
  postGoal: http.post(urlTransactions, async({request}) => {
    const input = await request.json() as CreateGoalInput;
    let goals = loadGoals()

    const newGoal: Goal = {
      id: crypto.randomUUID(),
      title: input.title,
      targetAmount: input.targetAmount,
      currentAmount: 0,
      deadline: new Date(input.deadline),
      color: input.color || '#6366F1',
      icon: 'target',
    };
    
    goals.push(newGoal);


    return HttpResponse.json({
      data: newGoal,
      success: true,
      message: 'Goal created successfully',
    }, { status: 201 });
  })
}

export default goalPostHandler