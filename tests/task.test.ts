import { Livepeer } from "../index.js";
import { compareResponseStructures } from "./utils";

const API_BASE_URL = "https://livepeer.studio/api";
const apiKey = "478de893-583e-47a6-9294-da65a98c6234";

describe("Tasks API", () => {
  const sdk = new Livepeer({ apiKey });

  describe("List tasks", () => {
    it("should list tasks and match the structure of direct API call", async () => {
      const { data: tasks } = await sdk.task.getAll();

      const response = await fetch(`${API_BASE_URL}/task`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`API responded with status ${response.status}`);
      }

      const directApiResponse = await response.json();

      const isStructureEqual = compareResponseStructures(
        tasks,
        directApiResponse
      );

      expect(isStructureEqual).toBe(true);
    });
  });

  describe("Retrieve a task", () => {
    it("should retrieve a task and match the structure of direct API call", async () => {
      const taskId = "8108c7f7-41d4-4d05-b767-92c41f1a692a";

      const { task } = await sdk.task.get(taskId);

      const response = await fetch(`${API_BASE_URL}/task/${taskId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`API responded with status ${response.status}`);
      }

      const directApiResponse = await response.json();

      const isStructureEqual = compareResponseStructures(
        task,
        directApiResponse
      );

      expect(isStructureEqual).toBe(true);
    });
  });
});
