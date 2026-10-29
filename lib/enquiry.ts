import { z } from 'zod';

export const enquirySchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name').max(100),
  phone: z
    .string()
    .trim()
    .regex(/^[+\d][\d\s-]{7,16}$/, 'Please enter a valid phone number'),
  email: z.string().trim().email('Please enter a valid email').max(150).or(z.literal('')).optional(),
  business: z.string().trim().max(150).optional(),
  city: z.string().trim().max(80).optional(),
  service: z.string().trim().max(80).optional(),
  message: z.string().trim().min(5, 'Please tell us a little about your requirement').max(2000),
  website: z.string().max(200).optional(), // honeypot: real users leave it empty; route drops non-empty
});

export type Enquiry = z.infer<typeof enquirySchema>;
