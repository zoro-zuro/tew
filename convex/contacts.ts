import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const saveContact = mutation({
    args: {
        fullName: v.string(),
        companyName: v.optional(v.string()),
        businessEmail: v.string(),
        phoneNumber: v.string(),
        message: v.optional(v.string()),
        location: v.optional(v.string()),
        requirement: v.optional(v.string()),
        source: v.string(),
    },
    handler: async (ctx, args) => {
        const contactId = await ctx.db.insert("contacts", {
            ...args,
            createdAt: Date.now(),
        });
        return contactId;
    },
});

export const getContacts = query({
    handler: async (ctx) => {
        return await ctx.db.query("contacts").order("desc").collect();
    },
});
