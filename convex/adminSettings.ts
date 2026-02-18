import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

const DEFAULT_KEY = "TEW-ADMIN-2026";

export const getAdminKey = query({
    handler: async (ctx) => {
        const settings = await ctx.db.query("adminSettings").first();
        return settings?.key || DEFAULT_KEY;
    },
});

export const updateAdminKey = mutation({
    args: {
        currentKey: v.string(),
        newKey: v.string(),
    },
    handler: async (ctx, args) => {
        const settings = await ctx.db.query("adminSettings").first();
        const activeKey = settings?.key || DEFAULT_KEY;

        if (args.currentKey !== activeKey) {
            throw new Error("Invalid current key");
        }

        if (settings) {
            await ctx.db.patch(settings._id, { key: args.newKey });
        } else {
            await ctx.db.insert("adminSettings", { key: args.newKey });
        }

        return { success: true };
    },
});
