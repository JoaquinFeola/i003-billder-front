import { Project } from "@/interfaces";
import { create } from "zustand";


interface ProjectStore {
    projects: Project[];
    getProjects: () => Promise<void>;
}


export const useProjectStore = create<ProjectStore>((set) => ({
    getProjects: async () => {

    },
    projects: [ ]
})) 