import { compareResponseStructures, sdk } from "./utils";

describe("Sessions API", () => {
	describe("Retrieve a session", () => {
		it("should retrieve a session and match the structure of direct API call", async () => {
			const sessionId = process.env.EXISTING_SESSION_ID ?? "";

			const { session } = await sdk.session.get(sessionId);

			const response = await fetch(
				`${process.env.API_BASE_URL}/session/${sessionId}`,
				{
					method: "GET",
					headers: {
						Authorization: `Bearer ${process.env.API_KEY}`,
					},
				},
			);

			if (!response.ok) {
				throw new Error(`API responded with status ${response.status}`);
			}

			const directApiResponse = await response.json();

			const isStructureEqual = compareResponseStructures(
				session,
				directApiResponse,
			);

			expect(isStructureEqual).toBe(true);
		});
	});

	describe("List sessions", () => {
		it("should list sessions and match the structure of direct API call", async () => {
			const { data: sessions } = await sdk.session.getAll();

			const response = await fetch(`${process.env.API_BASE_URL}/session`, {
				method: "GET",
				headers: {
					Authorization: `Bearer ${process.env.API_KEY}`,
				},
			});

			if (!response.ok) {
				throw new Error(`API responded with status ${response.status}`);
			}

			const directApiResponse = await response.json();

			const isStructureEqual = compareResponseStructures(
				sessions,
				directApiResponse,
			);

			expect(isStructureEqual).toBe(true);
		});
	});

	describe("Retrieve recorded sessions", () => {
		it("should retrieve recorded sessions and match the structure of direct API call", async () => {
			const parentId = "01ef4c1b-946c-4662-8c3e-e29960be5953";

			const { data: recordedSessions } = await sdk.session.getRecorded(
				parentId,
				1,
			);

			const response = await fetch(
				`${process.env.API_BASE_URL}/stream/${parentId}/sessions?record=1`,
				{
					method: "GET",
					headers: {
						Authorization: `Bearer ${process.env.API_KEY}`,
					},
				},
			);

			if (!response.ok) {
				throw new Error(`API responded with status ${response.status}`);
			}

			const directApiResponse = await response.json();

			const isStructureEqual = compareResponseStructures(
				recordedSessions,
				directApiResponse,
			);

			expect(isStructureEqual).toBe(true);
		});
	});

	describe("Retrieve Retrieve clips of a session", () => {
		it("should retrieve clips of a session and match the structure of direct API call", async () => {
			const sessionId = "d391a355-d405-46cb-8491-c40a243dfbee";

			const { data: clips } = await sdk.session.getClips(sessionId);

			const response = await fetch(
				`${process.env.API_BASE_URL}/session/${sessionId}/clips`,
				{
					method: "GET",
					headers: {
						Authorization: `Bearer ${process.env.API_KEY}`,
					},
				},
			);

			if (!response.ok) {
				throw new Error(`API responded with status ${response.status}`);
			}

			const directApiResponse = await response.json();

			const isStructureEqual = compareResponseStructures(
				clips,
				directApiResponse,
			);

			expect(isStructureEqual).toBe(true);
		});
	});
});
