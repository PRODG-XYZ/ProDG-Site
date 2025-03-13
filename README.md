# ProDG Studio
ProDG Studio is a [Tailwind UI](https://tailwindui.com) site template built using [Tailwind CSS](https://tailwindcss.com) and [Next.js](https://nextjs.org).

## Getting started

To get started with this template, first install the npm dependencies:

```bash
pnpm install
```

Next, run the development server:

```bash
pnpm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Supabase Integration

### Contact Form

The contact form is integrated with [Supabase](https://supabase.com) to store form submissions. To set up this integration:

1. Create a Supabase account and project
2. Create a table named `contact_submissions`:
   - You can manually create the table following the structure below, or
   - Use the SQL script provided in `src/db/contact_submissions.sql` by copying and pasting it into the Supabase SQL editor

   Required table structure:
   - `id`: uuid (primary key)
   - `name`: text (not null)
   - `email`: text (not null)
   - `company`: text
   - `phone`: text
   - `message`: text (not null)
   - `budget`: text
   - `created_at`: timestamp with time zone (default: now())

3. Copy your Supabase project URL and anon key to the `.env.local` file:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

4. The SQL script also sets up appropriate Row Level Security (RLS) policies to:
   - Allow anonymous form submissions
   - Restrict data access to authenticated administrators only
   - Create useful indexes for better performance

### Newsletter Subscription

The newsletter subscription form in the footer is also integrated with Supabase:

1. Create a table named `newsletter_subscribers`:
   - Use the SQL script provided in `src/db/newsletter_subscribers.sql` by copying and pasting it into the Supabase SQL editor

   Table structure:
   - `id`: uuid (primary key)
   - `email`: text (not null, unique)
   - `subscribed_at`: timestamp with time zone (default: now())
   - `unsubscribed_at`: timestamp with time zone (null by default)
   - `is_active`: boolean (default: true)

2. The newsletter functionality includes:
   - Email validation
   - Duplicate subscription prevention
   - Success/error messaging
   - Loading state feedback

3. The SQL script sets up appropriate Row Level Security (RLS) policies to:
   - Allow anonymous subscriptions
   - Restrict data access to administrators only
   - Create indexes for performance optimization

## Customizing

You can start editing this template by modifying the files in the `/src` folder. The site will auto-update as you edit these files.

## License

This site template is a commercial product and is licensed under the [Tailwind UI license](https://tailwindui.com/license).

## Learn more

To learn more about the technologies used in this site template, see the following resources:

- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [Framer Motion](https://www.framer.com/docs/) - the official Framer Motion documentation
- [MDX](https://mdxjs.com/) - the official MDX documentation
