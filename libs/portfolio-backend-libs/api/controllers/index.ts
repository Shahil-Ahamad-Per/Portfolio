import { Request, Response } from 'express';

export class PortfolioController {
  static async getPortfolioData(req: Request, res: Response) {
    try {
      const portfolioData = {
        personal: {
          name: 'Shahil Ahamad',
          title: 'Full Stack Developer',
          email: 'shahil@example.com',
          location: 'Nepal'
        },
        skills: [
          'React', 'Next.js', 'TypeScript', 'Node.js', 
          'Express', 'MongoDB', 'PostgreSQL', 'AWS'
        ],
        projects: [
          {
            id: 1,
            title: 'Portfolio Website',
            description: 'A modern portfolio built with Next.js and Nx',
            technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Nx']
          }
        ]
      };
      
      res.json(portfolioData);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch portfolio data' });
    }
  }
  
  static async handleContactSubmission(req: Request, res: Response) {
    try {
      const { name, email, message } = req.body;
      
      // Here you would typically:
      // 1. Save to database
      // 2. Send email notification
      // 3. Send confirmation email to user
      
      console.log('New contact submission:', { name, email, message });
      
      res.json({
        success: true,
        message: 'Thank you for reaching out! I will get back to you soon.'
      });
    } catch (error) {
      res.status(500).json({ error: 'Failed to process contact form' });
    }
  }
}