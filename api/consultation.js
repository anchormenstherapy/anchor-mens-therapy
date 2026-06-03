let Resend;
try {
  Resend = require('resend').Resend;
} catch (e) {
  // If resend fails to load, handler will return a clear error
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!Resend) {
    return res.status(500).json({ error: 'Resend module failed to load' });
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: 'RESEND_API_KEY not configured' });
  }

  const { name, email, city, message } = req.body || {};

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'Anchor Men\'s Therapy <noreply@anchormenstherapy.com>',
      to: 'info@anchormenstherapy.com',
      subject: `Anchor Men's Therapy Inquiry from ${name}`,
      replyTo: email,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>City:</strong> ${city || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message || 'No message provided'}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: error.message || 'Failed to send email' });
  }
}
