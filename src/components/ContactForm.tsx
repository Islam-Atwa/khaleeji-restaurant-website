"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

export function ContactForm() {
    const form = useForm({
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    function onSubmit(values: any) {
        console.log(values);
        // In a real app we'd send this to Sanity
    }

    return (
        <div className="glass-panel rounded-[32px] p-8 md:p-12">
            <h2 className="mb-8 font-heading text-3xl font-bold text-white">
                أرسل لنا رسالة
            </h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-white">الاسم</FormLabel>
                                <FormControl>
                                    <Input placeholder="الاسم الكريم" {...field} className="border-white/20 bg-black/20 text-white placeholder:text-muted-foreground focus-visible:ring-primary" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-white">البريد الإلكتروني</FormLabel>
                                <FormControl>
                                    <Input placeholder="example@domain.com" {...field} className="border-white/20 bg-black/20 text-white placeholder:text-muted-foreground focus-visible:ring-primary" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-white">الرسالة</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="اكتب رسالتك هنا..." {...field} className="min-h-[120px] border-white/20 bg-black/20 text-white placeholder:text-muted-foreground focus-visible:ring-primary" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full neon-glow rounded-full text-lg">
                        إرسال
                    </Button>
                </form>
            </Form>
        </div>
    );
}
