import { defineType, defineField } from "sanity";

export const dishType = defineType({
    name: "dish",
    title: "Dish",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96,
            },
        }),
        defineField({
            name: "mainImage",
            title: "Main image",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "categories",
            title: "Categories",
            type: "array",
            of: [{ type: "reference", to: { type: "category" } }],
        }),
        defineField({
            name: "price",
            title: "Price",
            type: "number",
            validation: (Rule) => Rule.required().positive(),
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
        }),
        defineField({
            name: "ingredients",
            title: "Ingredients",
            type: "array",
            of: [{ type: "string" }],
        }),
        defineField({
            name: "isSignature",
            title: "Is Signature Dish?",
            type: "boolean",
            initialValue: false,
        }),
    ],
});
