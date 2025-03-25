export interface CelebrationData {
    name: string;
    isAdmin?: boolean;
    imageUrl: string;
    celebrationType: "birthday" | "work_anniversary";
    date: string;
    years: number;
  }