import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "budgethive", // Unique app ID
  name: "BudgetHive",
  retryFunction: async (attempt) => ({
    delay: Math.pow(2, attempt) * 1000, // Exponential backoff
    maxAttempts: 2,
  }),
});
