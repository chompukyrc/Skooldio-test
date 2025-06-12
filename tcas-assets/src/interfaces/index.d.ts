export interface IDepartmentData {
    id: string;
    name: string;
    logo: string;
    roundSeats: number[];
    score: Score | null;
    faculty: Faculty;
    updatedAt: string;
    likes: number;
}

interface IFaculty {
    id: string;
    name: string;
    tagId: string;
    university: University;
}

interface IUniversity {
    id: string;
    name: string;
}

export interface IScore {
    id: string;
    year: number;
    scoreType: string;
    min: number;
    max: number;
    avg: number;
}

