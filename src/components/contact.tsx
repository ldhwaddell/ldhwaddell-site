"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { TypographyH2 } from "./typography/h2";
import PaperPlane from "@/components/icons/paper-plane.svg";

const FormSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: "This field cannot be empty",
    })
    .max(160, {
      message: "Name must not be longer than 160 characters.",
    }),
  email: z
    .string()
    .min(1, {
      message: "This field cannot be empty",
    })
    .email({ message: "This is not a valid email" }),
  message: z
    .string()
    .min(1, {
      message: "This field cannot be empty",
    })
    .max(500, { message: "Character limit: 500" }),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "Message Sent",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <section
      id="contact"
      className="w-full flex flex-col items-center justify-center py-5"
    >
      {" "}
      <div className="w-3/4">
        {" "}
        <TypographyH2 text="Contact Me" />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-3">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="How can I help?"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">
              Send Message <PaperPlane className="ml-3" />
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default ContactForm;
