# Email Setup Instructions

## Overview
The contact form now sends email notifications using [Resend](https://resend.com) - a modern email API for developers.

## What Gets Sent

When a user submits the contact form:
1. **Business Owner Email** → Sent to `hej@mypeterinarian.com` with full form details
2. **Customer Confirmation** → Sent to the customer with contact information and next steps

## Setup Steps

### 1. Create a Resend Account

1. Go to [resend.com/signup](https://resend.com/signup)
2. Sign up with your email
3. Verify your email address

### 2. Get Your API Key

1. Log in to [resend.com](https://resend.com)
2. Navigate to **API Keys** section
3. Click **Create API Key**
4. Give it a name (e.g., "MyPeterinarian Production")
5. Copy the API key (starts with `re_`)

### 3. Configure Domain (For Production)

**Important**: To send emails from `@mypeterinarian.com`, you need to verify your domain:

1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter: `mypeterinarian.com`
4. Add the provided DNS records to your domain:
   - SPF record
   - DKIM records
   - DMARC record (optional but recommended)
5. Wait for verification (usually takes 5-15 minutes)

### 4. Add API Key to Environment

#### Local Development (.env.local)
```bash
RESEND_API_KEY=re_your_api_key_here
```

#### Production (Vercel)
1. Go to your Vercel project settings
2. Navigate to **Environment Variables**
3. Add new variable:
   - **Name**: `RESEND_API_KEY`
   - **Value**: Your Resend API key
   - **Environment**: Production (and Preview if needed)
4. Click **Save**
5. Redeploy your application

### 5. Update Email Sender (Production Only)

Once your domain is verified, update the "from" address in:

**File**: `/src/app/api/contact/route.ts`

Change:
```typescript
from: 'MyPeterinarian <noreply@mypeterinarian.com>',
```

To your verified domain:
```typescript
from: 'MyPeterinarian <noreply@mypeterinarian.com>',
```

## Testing

### Local Testing (Development)

For local testing, Resend provides a sandbox:
- You can send to **any email** during development
- Emails will be delivered to real inboxes
- No domain verification needed for testing

### Production Testing

1. Submit a test form on your live site
2. Check `hej@mypeterinarian.com` for the notification
3. Check the customer's email for confirmation
4. Monitor in Resend dashboard under **Logs**

## Email Templates

### Business Owner Notification
- **To**: hej@mypeterinarian.com
- **Contains**: Name, email, phone, subject, message
- **Reply-To**: Customer's email (for easy replies)

### Customer Confirmation
- **To**: Customer's email
- **Contains**: Thank you message, contact info, business hours
- **Languages**: English and Danish

## Troubleshooting

### "RESEND_API_KEY is not set"
- Add the API key to `.env.local` or Vercel environment variables
- Restart your development server
- Redeploy if on Vercel

### Emails Not Arriving
1. Check Resend dashboard **Logs** for delivery status
2. Verify domain is properly configured (for production)
3. Check spam folder
4. Ensure API key has correct permissions

### Domain Not Verified
- DNS changes can take up to 48 hours (usually much faster)
- Use Resend's DNS checker tool
- Contact Resend support if issues persist

## Pricing

Resend offers:
- **Free Tier**: 3,000 emails/month (perfect for small businesses)
- **Pro Tier**: $20/month for 50,000 emails/month
- No credit card required for free tier

## Support

- Resend Documentation: [resend.com/docs](https://resend.com/docs)
- Resend Support: [resend.com/support](https://resend.com/support)
- GitHub Issues: [github.com/resendlabs/resend-node](https://github.com/resendlabs/resend-node)

## Security Notes

- Never commit your API key to Git
- API keys are in `.env.local` (gitignored)
- Use environment variables in production
- Rotate API keys if compromised
