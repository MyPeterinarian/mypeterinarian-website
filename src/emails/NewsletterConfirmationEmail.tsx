import * as React from 'react';

interface NewsletterConfirmationEmailProps {
  email: string;
  locale: string;
}

export const NewsletterConfirmationEmail: React.FC<NewsletterConfirmationEmailProps> = ({
  email,
  locale,
}) => {
  const isEnglish = locale === 'en';

  return (
    <html>
      <head>
        <style>{`
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background: linear-gradient(135deg, #22c0b6 0%, #1a9d94 100%);
            color: white;
            padding: 30px;
            text-align: center;
            border-radius: 8px 8px 0 0;
          }
          .content {
            background: #ffffff;
            padding: 30px;
            border: 1px solid #e0e0e0;
            border-top: none;
            border-radius: 0 0 8px 8px;
          }
          .footer {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e0e0e0;
            font-size: 12px;
            color: #666;
            text-align: center;
          }
          .benefits {
            background: #f5f5f5;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
          }
          .benefit-item {
            margin: 10px 0;
            padding-left: 25px;
            position: relative;
          }
          .benefit-item:before {
            content: "✓";
            position: absolute;
            left: 0;
            color: #22c0b6;
            font-weight: bold;
            font-size: 18px;
          }
          .unsubscribe {
            color: #999;
            font-size: 11px;
            margin-top: 20px;
          }
          .unsubscribe a {
            color: #666;
            text-decoration: underline;
          }
        `}</style>
      </head>
      <body>
        <div className="header">
          <h1 style={{ margin: 0, fontSize: '24px' }}>
            {isEnglish ? 'Welcome to MyPeterinarian!' : 'Velkommen til MyPeterinarian!'}
          </h1>
          <p style={{ margin: '10px 0 0 0', fontSize: '14px', opacity: 0.9 }}>
            {isEnglish ? 'Newsletter Subscription Confirmed' : 'Nyhedsbrev Abonnement Bekræftet'}
          </p>
        </div>
        
        <div className="content">
          <p>
            {isEnglish 
              ? 'Thank you for subscribing to the MyPeterinarian newsletter!' 
              : 'Tak fordi du abonnerer på MyPeterinarian nyhedsbrev!'}
          </p>
          
          <p>
            {isEnglish
              ? 'We\'re excited to have you join our community of pet lovers. You\'ll now receive:'
              : 'Vi er glade for at have dig med i vores fællesskab af kæledyrsejere. Du vil nu modtage:'}
          </p>

          <div className="benefits">
            <div className="benefit-item">
              {isEnglish 
                ? 'Expert pet care tips and advice' 
                : 'Ekspertrådgivning om kæledyrspleje'}
            </div>
            <div className="benefit-item">
              {isEnglish 
                ? 'Exclusive offers and promotions' 
                : 'Eksklusive tilbud og kampagner'}
            </div>
            <div className="benefit-item">
              {isEnglish 
                ? 'Updates on our services and clinic news' 
                : 'Opdateringer om vores tjenester og klinik nyheder'}
            </div>
            <div className="benefit-item">
              {isEnglish 
                ? 'Seasonal pet health reminders' 
                : 'Sæsonbestemte sundhedspåmindelser for kæledyr'}
            </div>
          </div>

          <p>
            {isEnglish
              ? 'Your subscription is confirmed for: '
              : 'Dit abonnement er bekræftet for: '}
            <strong>{email}</strong>
          </p>

          <p>
            {isEnglish
              ? 'If you have any questions or need assistance, feel free to contact us:'
              : 'Hvis du har spørgsmål eller brug for hjælp, er du velkommen til at kontakte os:'}
          </p>

          <p style={{ marginTop: '20px' }}>
            <strong>{isEnglish ? 'Phone:' : 'Telefon:'}</strong>{' '}
            <a href="tel:+4561667611" style={{ color: '#22c0b6', textDecoration: 'none' }}>
              +45 61 66 76 11
            </a>
            <br />
            <strong>{isEnglish ? 'Email:' : 'E-mail:'}</strong>{' '}
            <a href="mailto:hej@mypeterinarian.com" style={{ color: '#22c0b6', textDecoration: 'none' }}>
              hej@mypeterinarian.com
            </a>
          </p>

          <p style={{ marginTop: '20px' }}>
            {isEnglish ? 'Best regards,' : 'Med venlig hilsen,'}
            <br />
            <strong>MyPeterinarian Team</strong>
          </p>
        </div>

        <div className="footer">
          <p>
            {isEnglish 
              ? 'You are receiving this email because you subscribed to our newsletter at MyPeterinarian.com' 
              : 'Du modtager denne e-mail, fordi du har tilmeldt dig vores nyhedsbrev på MyPeterinarian.com'}
          </p>
          <div className="unsubscribe">
            {isEnglish
              ? 'To unsubscribe, please contact us at hej@mypeterinarian.com'
              : 'For at afmelde dig, kontakt os venligst på hej@mypeterinarian.com'}
          </div>
        </div>
      </body>
    </html>
  );
};

export default NewsletterConfirmationEmail;
