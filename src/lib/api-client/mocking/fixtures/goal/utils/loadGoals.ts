import { Goal } from "@/lib/api-client/goal/types"

export default function loadGoals() {
  let goals: Goal[] = [...require('../goals.json')]
  return goals
}