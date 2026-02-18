import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    contacts: defineTable({
        fullName: v.string(),
        companyName: v.optional(v.string()),
        businessEmail: v.string(),
        phoneNumber: v.string(),
        message: v.optional(v.string()),
        location: v.optional(v.string()),
        requirement: v.optional(v.string()),
        source: v.string(),
        createdAt: v.number(),
    }),
    adminSettings: defineTable({
        key: v.string(),
    }),
});
