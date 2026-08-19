import { z } from "zod";

export const admissionSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must contain at least 2 characters")
    .max(50),

  middleName: z.string().max(50).optional(),

  lastName: z
    .string()
    .min(2, "Last name must contain at least 2 characters")
    .max(50),

  email: z.string().email("Enter a valid email address"),

  phone: z.string().min(10, "Enter a valid phone number").max(15),

  dateOfBirth: z.string().min(1, "Date of birth is required"),

  gender: z.enum(["male", "female", "prefer-not-to-say"]),

  state: z.string().min(1, "Select your state"),

  localGovernment: z.string().min(1, "Local government is required"),

  programme: z.string().min(1, "Select a programme"),

  faculty: z.string().min(1, "Select a faculty"),

  department: z.string().min(1, "Select a department"),

  passportUrl: z.string().optional(),
});

export type AdmissionFormData = z.infer<typeof admissionSchema>;
