// Database connection and models
export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  createdAt: Date;
}

// Mock database functions (replace with actual database implementation)
export class DatabaseService {
  private static contactSubmissions: ContactSubmission[] = [];
  private static projects: Project[] = [];

  static async saveContactSubmission(data: Omit<ContactSubmission, 'id' | 'createdAt'>): Promise<ContactSubmission> {
    const submission: ContactSubmission = {
      id: Date.now().toString(),
      ...data,
      createdAt: new Date()
    };
    
    this.contactSubmissions.push(submission);
    return submission;
  }

  static async getProjects(): Promise<Project[]> {
    return this.projects;
  }

  static async addProject(data: Omit<Project, 'id' | 'createdAt'>): Promise<Project> {
    const project: Project = {
      id: Date.now().toString(),
      ...data,
      createdAt: new Date()
    };
    
    this.projects.push(project);
    return project;
  }
}