import { Router } from 'express';

const router = Router();

// Portfolio routes
router.get('/portfolio', (req, res) => {
  res.json({
    name: 'Shahil Ahamad',
    title: 'Full Stack Developer',
    skills: ['React', 'Node.js', 'TypeScript', 'Next.js'],
    experience: '3+ years'
  });
});

// Contact routes
router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // Here you would typically save to database or send email
  console.log('Contact form submission:', { name, email, message });
  
  res.json({ 
    success: true, 
    message: 'Thank you for your message! I will get back to you soon.' 
  });
});

export { router as apiRoutes };