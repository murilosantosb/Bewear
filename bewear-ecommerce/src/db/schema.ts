import { relations } from "drizzle-orm"
import { uuid, text, pgTable, integer, timestamp } from "drizzle-orm/pg-core"

export const userTable = pgTable("user", {
    id: uuid().primaryKey().defaultRandom(),
    name: text().notNull(),
})

export const categoryTable = pgTable("category", {
    id: uuid().primaryKey().defaultRandom(),
    name: text().notNull(),
    slug: text().notNull().unique(),
    createdAt: timestamp().notNull().defaultNow(),
})

export const productTable = pgTable("product", {
    id: uuid().primaryKey().defaultRandom(),
    categoryId: uuid().references(() => categoryTable.id),
    name: text().notNull(),
    slug: text().notNull().unique(),
    description: text().notNull(),
    priceInCents: integer().notNull(),
    createdAt: timestamp().notNull().defaultNow(),
})

export const productRelations = relations(productTable, ({ one }) => ( {
    category: one(categoryTable, {
        fields: [productTable.categoryId],
        references: [categoryTable.id],
    })
}));