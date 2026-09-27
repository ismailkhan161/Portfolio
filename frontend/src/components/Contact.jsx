import { useRef, useState } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FiAlertCircle, FiCheckCircle, FiLoader, FiMail, FiSend } from 'react-icons/fi';
import { SITE } from '../config/site.js';
import { sendContactMessage } from '../services/api.js';
import { toHref } from '../utils/links.js';
import { MESSAGE_MAX, validateContact } from '../utils/validation.js';
import ActionLink from './ActionLink.jsx';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

const EMPTY_VALUES = { name: '', email: '', message: '' };

export default function Contact() {
  const formRef = useRef(null);
  const [values, setValues] = useState(EMPTY_VALUES);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [feedback, setFeedback] = useState('');

  const showError = (field) => touched[field] && errors[field];

  const handleChange = (event) => {
    const { name, value } = event.target;
    const next = { ...values, [name]: value };
    setValues(next);
    if (touched[name]) setErrors(validateContact(next));
    if (status === 'success' || status === 'error') setStatus('idle');
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched((current) => ({ ...current, [name]: true }));
    setErrors(validateContact(values));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status === 'loading') return;

    const validationErrors = validateContact(values);
    setErrors(validationErrors);
    setTouched({ name: true, email: true, message: true });

    const firstInvalid = Object.keys(validationErrors)[0];
    if (firstInvalid) {
      formRef.current?.elements[firstInvalid]?.focus();
      return;
    }

    setStatus('loading');
    setFeedback('');
    try {
      await sendContactMessage({
        name: values.name.trim(),
        email: values.email.trim(),
        message: values.message.trim(),
      });
      setValues(EMPTY_VALUES);
      setTouched({});
      setErrors({});
      setStatus('success');
      setFeedback('Message sent. Thank you, I will get back to you soon.');
    } catch (error) {
      if (error.fieldErrors && Object.keys(error.fieldErrors).length > 0) {
        setErrors(error.fieldErrors);
        setTouched({ name: true, email: true, message: true });
      }
      setStatus('error');
      setFeedback(error.message || 'Something went wrong. Please try again.');
    }
  };

  const isLoading = status === 'loading';

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <div className="contact-intro">
          <SectionHeading id="contact-title" title="Contact">
            Have a project, an idea, or an opportunity? Send a message and I will reply by email.
          </SectionHeading>
          <Reveal className="contact-links">
            <ActionLink href={SITE.links.email} variant="secondary" icon={FiMail} external>
              Email
            </ActionLink>
            <ActionLink href={SITE.links.github} variant="secondary" icon={FaGithub} external>
              GitHub
            </ActionLink>
            <ActionLink href={SITE.links.linkedin} variant="secondary" icon={FaLinkedinIn} external>
              LinkedIn
            </ActionLink>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <form ref={formRef} className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className={`field ${showError('name') ? 'has-error' : ''}`}>
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={Boolean(showError('name'))}
                aria-describedby={showError('name') ? 'contact-name-error' : undefined}
                maxLength={100}
                required
              />
              {showError('name') && (
                <p id="contact-name-error" className="field-error">
                  {errors.name}
                </p>
              )}
            </div>

            <div className={`field ${showError('email') ? 'has-error' : ''}`}>
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={Boolean(showError('email'))}
                aria-describedby={showError('email') ? 'contact-email-error' : undefined}
                maxLength={254}
                required
              />
              {showError('email') && (
                <p id="contact-email-error" className="field-error">
                  {errors.email}
                </p>
              )}
            </div>

            <div className={`field ${showError('message') ? 'has-error' : ''}`}>
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={Boolean(showError('message'))}
                aria-describedby={showError('message') ? 'contact-message-error' : undefined}
                maxLength={MESSAGE_MAX}
                required
              />
              <div className="field-meta">
                {showError('message') ? (
                  <p id="contact-message-error" className="field-error">
                    {errors.message}
                  </p>
                ) : (
                  <span />
                )}
                <span className="char-count">
                  {values.message.length}/{MESSAGE_MAX}
                </span>
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block" disabled={isLoading}>
              {isLoading ? <FiLoader className="spin" aria-hidden="true" /> : <FiSend aria-hidden="true" />}
              <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
            </button>

            <div className="form-feedback" role="status" aria-live="polite">
              {status === 'success' && (
                <p className="feedback feedback-success">
                  <FiCheckCircle aria-hidden="true" /> {feedback}
                </p>
              )}
              {status === 'error' && (
                <p className="feedback feedback-error">
                  <FiAlertCircle aria-hidden="true" /> {feedback}
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
