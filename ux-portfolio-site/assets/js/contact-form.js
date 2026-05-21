const recipientEmail = 'chaninf88@gmail.com';

const fieldValue = (form, fieldName) => {
  const field = form.elements[fieldName];
  return field ? field.value.trim() : '';
};

document.querySelectorAll('.contact-form').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = fieldValue(form, 'name') || 'Hiring contact';
    const email = fieldValue(form, 'email') || 'Not provided';
    const message = fieldValue(form, 'message') || 'No message provided.';

    const subject = `UX/UI portfolio contact from ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      '',
      'Message:',
      message
    ].join('\n');

    const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  });
});
