import * as React from 'react';

interface ContactFormEmailProps {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  locale: string;
}

export const ContactFormEmail: React.FC<ContactFormEmailProps> = ({
  name,
  email,
  phone,
  subject,
  message,
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
          .field {
            margin-bottom: 20px;
          }
          .label {
            font-weight: 600;
            color: #22c0b6;
            margin-bottom: 5px;
          }
          .value {
            padding: 10px;
            background: #f5f5f5;
            border-radius: 4px;
            word-wrap: break-word;
          }
          .message-box {
            background: #f9f9f9;
            padding: 15px;
            border-left: 4px solid #22c0b6;
            border-radius: 4px;
            margin-top: 10px;
            white-space: pre-wrap;
          }
          .footer {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e0e0e0;
            font-size: 12px;
            color: #666;
            text-align: center;
          }
        `}</style>
      </head>
      <body>
        <div className="header">
          <h1 style={{ margin: 0, fontSize: '24px' }}>
            {isEnglish ? 'New Contact Form Submission' : 'Ny Kontaktformular Indsendelse'}
          </h1>
          <p style={{ margin: '10px 0 0 0', fontSize: '14px', opacity: 0.9 }}>
            MyPeterinarian
          </p>
        </div>
        
        <div className="content">
          <div className="field">
            <div className="label">{isEnglish ? 'Name:' : 'Navn:'}</div>
            <div className="value">{name}</div>
          </div>

          <div className="field">
            <div className="label">{isEnglish ? 'Email:' : 'E-mail:'}</div>
            <div className="value">
              <a href={'mailto:' + email} style={{ color: '#22c0b6', textDecoration: 'none' }}>
                {email}
              </a>
            </div>
          </div>

          {phone && (
            <div className="field">
              <div className="label">{isEnglish ? 'Phone:' : 'Telefon:'}</div>
              <div className="value">
                <a href={'tel:' + phone} style={{ color: '#22c0b6', textDecoration: 'none' }}>
                  {phone}
                </a>
              </div>
            </div>
          )}

          {subject && (
            <div className="field">
              <div className="label">{isEnglish ? 'Subject:' : 'Emne:'}</div>
              <div className="value">{subject}</div>
            </div>
          )}

          <div className="field">
            <div className="label">{isEnglish ? 'Message:' : 'Besked:'}</div>
            <div className="message-box">{message}</div>
          </div>
        </div>

        <div className="footer">
          <p>
            {isEnglish 
              ? 'This email was sent from the contact form on MyPeterinarian.com' 
              : 'Denne e-mail blev sendt fra kontaktformularen på MyPeterinarian.com'}
          </p>
          <p>
            {isEnglish
              ? 'Please respond directly to the customer email address above.'
              : 'Svar venligst direkte til kundens e-mailadresse ovenfor.'}
          </p>
        </div>
      </body>
    </html>
  );
};

export default ContactFormEmail;
