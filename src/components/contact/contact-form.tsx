"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { SECTION_CARD_MOTION } from "../shared/section-animations";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(
    null,
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      if (result.error) {
        throw new Error(result.error);
      }

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      variants={SECTION_CARD_MOTION}
      initial="hidden"
      animate="visible"
      className="max-w-2xl mx-auto"
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-6 p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-border/80 transition-colors"
      >
        {/* ── Name Field ── */}
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* ── Email Field ── */}
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* ── Subject Field ── */}
        <div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <Input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>

        {/* ── Message Field ── */}
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={10}
            className="h-32"
          />
        </div>

        {/* ── Submit Status Messages ── */}
        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-600 text-sm"
          >
            ✓ Message sent successfully! I&apos;ll get back to you soon.
          </motion.div>
        )}
        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-600 text-sm"
          >
            ✗ Error sending message. Please try again.
          </motion.div>
        )}

        {/* ── Submit Button ── */}
        <div className="pt-4">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-xl border border-primary/50 bg-primary/10 px-7 py-4 text-lg font-semibold text-foreground transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground shadow-lg shadow-primary/5"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </div>

        {/* ── Contact Info Footer ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="pt-4 border-t border-border/50 space-y-2"
        >
          <div className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground block">Email</span>
            <span className="text-primary select-none">
              arafat24official@gmail.com
            </span>
          </div>
          <div className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground block">WhatsApp</span>
            <span
              className="text-primary select-none"
              rel="noopener noreferrer"
            >
              +8801870577034
            </span>
          </div>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
