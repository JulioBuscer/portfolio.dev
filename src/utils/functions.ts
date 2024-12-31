export function getYearsExperience(startDate: Date): number {
    const currentYear = new Date().getFullYear();
    const startYear = new Date(startDate).getFullYear();
    return currentYear - startYear;
}