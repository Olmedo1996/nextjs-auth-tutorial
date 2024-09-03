'use server';

import { LoginSchema } from '@/schemas';
import * as z from 'zod';

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.parse(values);

    if (!validatedFields) {
        return {
            error: 'Invalid values'
        };
    }

    return {
        success: 'Login successful!'
    };
};
