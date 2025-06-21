'use server';
import { ContactSchema } from './zod';
import { prisma } from './prisma';

export const ContactMesage = async () => {
  const validatedFields = ContactSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  const { name, email, subject, message } = validatedFields.data;

  try {
    await prisma.contact.create({
      data: { name, email, subject, message },
    });
    return { message: 'Thanks for contacting us' };
  } catch (error) {
    console.log(error);
  }
};
