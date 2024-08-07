'use client';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Balancer from 'react-wrap-balancer';
import { toast } from 'sonner';

import { Section, Container } from '@/components/craft';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';
import { postCMOOSMailingListData } from '@/app/api/actions';

const formSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
});

export function CTA() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  return (
    <Section id='cmoos-cat'>
      <Container className='space-y-8'>
        <h2 className='!my-0'>Join our mailing list</h2>
        <p className='text-lg opacity-70 md:text-2xl'>
          <Balancer>
            Join our mailing list to receive exclusive offers and updates about
            CMOOS.
          </Balancer>
        </p>
        <Form {...form}>
          <form
            action={async (formData) => {
              await postCMOOSMailingListData(formData);
              form.reset();
              toast.success('Thank you for joining our mailing list!');
              setTimeout(() => {
                toast.dismiss();
              }, 3000);
            }}
            className='space-y-8'
          >
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className='md:w-96'
                      placeholder='email@example.com'
                      type='email'
                      required
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    We&apos;ll never share your email.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {form.formState.isSubmitting ? (
              <Button disabled>
                <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Sending...
              </Button>
            ) : (
              <Button
                disabled={form.formState.isSubmitting}
                type='submit'
                variant='default'
              >
                Join
              </Button>
            )}
          </form>
        </Form>
        <div className='flex justify-center'>
          <Link className='-mt-1' href='#home'>
            Back to <span aria-hidden='true'>&uarr;</span>
          </Link>
        </div>
      </Container>
    </Section>
  );
}

export default CTA;
