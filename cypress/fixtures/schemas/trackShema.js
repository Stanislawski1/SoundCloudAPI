export const trackSchema = {
    type: "object",
    required: ["id", "title", "duration", "user"],
    properties: {
        id: { type: "number" },
        title: { type: "string" },
        duration: { type: "number" },
        genre: { type: ["string", "null"] },
        user: {
            type: "object",
            required: ["username"],
            properties: {
                username: { type: "string" }
            }
        }
    }
};