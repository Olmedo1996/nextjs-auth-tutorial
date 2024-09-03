'use server';

import { RegisterSchema } from '@/schemas';
import * as z from 'zod';

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.parse(values);

    if (!validatedFields) {
        return {
            error: 'Invalid values'
        };
    }

    return {
        success: 'Register successful!'
    };
};
