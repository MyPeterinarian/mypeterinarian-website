import * as React from 'react';

interface ContactFormConfirmationEmailProps {
  name: string;
  locale: string;
}

export const ContactFormConfirmationEmail: React.FC<ContactFormConfirmationEmailProps> = ({
  name,
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
          .contact-info {
            background: #f5f5f5;
            padding: 15px;
            border-radius: 4px;
            margin-top: 20px;
          }
        `}</style>
      </head>
      <body>
        <div className="header">
          <h1 style={{ margin: 0, fontSize: '24px' }}>
            {isEnglish ? 'Thank You for Contacting Us!' : 'Tak Fordi Du Kontaktede Os!'}
          </h1>
          <p style={{ margin: '10px 0 0 0', fontSize: '14px', opacity: 0.9 }}>
            MyPeterinarian
          </p>
        </div>
        
        <div className="content">
          <p>
            {isEnglish 
              ? 'Dear ' + name + ',' 
              : 'Kære ' + name + ','}
          </p>
          
          <p>
            {isEnglish
              ? 'Thank you for reaching out to us! We have received your message and will get back to you as soon as possible, typically within 24-48 hours during business days.'
              : 'Tak fordi du kontaktede os! Vi har modtaget din besked og vender tilbage til dig hurtigst muligt, typisk inden for 24-48 timer på hverdage.'}
          </p>

          <p>
            {isEnglish
              ? 'If your inquiry is urgent, please feel free to call us directly at:'
              : 'Hvis din henvendelse haster, er du velkommen til at ringe direkte til os på:'}
          </p>

          <div className="contact-info">
            <p style={{ margin: '5px 0' }}>
              <strong>{isEnglish ? 'Phone:' : 'Telefon:'}</strong>{' '}
              <a href="tel:+4561667611" style={{ color: '#22c0b6', textDecoration: 'none' }}>
                +45 61 66 76 11
              </a>
            </p>
            <p style={{ margin: '5px 0' }}>
              <strong>{isEnglish ? 'Email:' : 'E-mail:'}</strong>{' '}
              <a href="mailto:hej@mypeterinarian.com" style={{ color: '#22c0b6', textDecoration: 'none' }}>
                hej@mypeterinarian.com
              </a>
            </p>
            <p style={{ margin: '5px 0' }}>
              <strong>{isEnglish ? 'Address:' : 'Adresse:'}</strong>{' '}
              Peder Hvitfeldts Straede 16, 1173 Copenhagen, Denmark
            </p>
            <p style={{ margin: '5px 0' }}>
              <strong>{isEnglish ? 'Hours:' : 'Åbningstider:'}</strong>{' '}
              {isEnglish ? 'Mon-Fri, 10:00-16:00' : 'Man-Fre, 10:00-16:00'}
            </p>
          </div>

          <p style={{ marginTop: '20px' }}>
            {isEnglish
              ? 'We look forward to caring for your beloved pet!'
              : 'Vi ser frem til at tage os af dit elskede kæledyr!'}
          </p>

          <p>
            {isEnglish ? 'Best regards,' : 'Med venlig hilsen,'}
            <br />
            <strong>MyPeterinarian Team</strong>
          </p>
        </div>

        <div className="footer">
          <p>
            {isEnglish 
              ? 'This is an automated confirmation email. Please do not reply to this message.' 
              : 'Dette er en automatisk bekræftelsesmail. Svar venligst ikke på denne besked.'}
          </p>
        </div>
      </body>
    </html>
  );
};

export default ContactFormConfirmationEmail;
