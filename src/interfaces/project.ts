export type Project = {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    status: string;
    year: string;
    links: {
        live?: string;
        github?: string;
        npm?: string;
    };
    highlights: string[];
}